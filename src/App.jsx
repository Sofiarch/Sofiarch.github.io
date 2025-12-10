import { useState } from 'react';
import Header from './components/Header';
import Marquee from './components/Marquee';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import MenuItemCard from './components/MenuItemCard';
import Checkout from './components/Checkout';
import { categoriesData } from './data/categories';
import { menuItems } from './data/menuItems';
import './App.css'; 

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); 
  
  const [activeSection, setActiveSection] = useState('foods');
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [cart, setCart] = useState({});
  const [isCheckout, setIsCheckout] = useState(false);

  const t = {
    back: isEnglish ? "Back" : "رجوع",
    noResults: isEnglish ? "No results found" : "لا توجد نتائج",
    comingSoon: isEnglish ? "Coming Soon..." : "قريباً...",
    emptyMenu: isEnglish ? "No items added yet." : "لم يتم إضافة عناصر بعد.",
    showOrder: isEnglish ? "Show my order" : "عرض طلبي",
    orderPlaced: isEnglish ? "Thank you! Your order has been placed." : "شكراً لك! تم استلام طلبك.",
    total: isEnglish ? "Total" : "المجموع",
    foundItems: isEnglish ? "Matching Items" : "عناصر مطابقة"
  };

  const addToCart = (item) => {
    setCart(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
  };

  const removeFromCart = (item) => {
    setCart(prev => {
      const currentQty = prev[item.id] || 0;
      if (currentQty <= 1) {
        const newCart = { ...prev };
        delete newCart[item.id];
        return newCart;
      }
      return { ...prev, [item.id]: currentQty - 1 };
    });
  };

  const deleteFromCart = (itemId) => {
    setCart(prev => {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
    });
  };

  const handlePlaceOrder = (userData, totalAmount) => {
    console.log("Order Placed:", { userData, cart, total: totalAmount });
    alert(`${t.orderPlaced}\n${t.total}: ${totalAmount.toFixed(3)}`);
    setCart({});
    setIsCheckout(false);
    setSelectedCategory(null);
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // 1. Filter Categories
  const visibleCategories = categoriesData.filter((cat) => {
    const titleToCheck = isEnglish ? cat.title : (cat.title_ar || cat.title);
    if (searchTerm) {
      return titleToCheck.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return cat.section === activeSection;
  });

  // 2. Filter Menu Items (New Logic)
  const getVisibleMenuItems = () => {
    if (!searchTerm) return [];
    
    // Flatten all categories into one big list of items
    const allItems = Object.values(menuItems).flat();

    return allItems.filter(item => {
        const title = isEnglish ? item.title : (item.title_ar || item.title);
        const description = isEnglish ? item.description : (item.description_ar || item.description);
        const term = searchTerm.toLowerCase();

        // Search in both Title and Description
        return title.toLowerCase().includes(term) || description.toLowerCase().includes(term);
    });
  };

  const visibleMenuItems = getVisibleMenuItems();
  const hasResults = visibleCategories.length > 0 || visibleMenuItems.length > 0;

  return (
    <div
      className={`mobile-wrapper ${isDarkMode ? 'dark-mode' : 'light-mode'} ${!isEnglish ? 'arabic' : ''}`}
      dir={isEnglish ? 'ltr' : 'rtl'}
    >
      <Header 
        isEnglish={isEnglish} 
        onToggleLang={() => setIsEnglish(!isEnglish)} 
        isDarkMode={isDarkMode}                   
        onToggleTheme={() => setIsDarkMode(!isDarkMode)} 
        onGoHome={() => {
            setSelectedCategory(null);
            setIsCheckout(false);
            setSearchTerm('');
        }}
      />
      
      <main className="content-grid">        
        {isCheckout ? (
            <Checkout 
                cart={cart}
                onBack={() => setIsCheckout(false)}
                onPlaceOrder={handlePlaceOrder}
                onAdd={addToCart}
                onRemove={removeFromCart}
                onDelete={deleteFromCart}
                isEnglish={isEnglish} 
            />
        ) : (
            <>
                <Marquee 
                    activeSection={activeSection} 
                    onSectionChange={(section) => {
                        setActiveSection(section);
                        setSelectedCategory(null);
                        setSearchTerm('');
                    }} 
                    isEnglish={isEnglish} 
                />

                {!selectedCategory ? (
                  <>
                    <SearchBar onSearch={setSearchTerm} isEnglish={isEnglish} />
                    
                    {/* Display Matching Categories */}
                    <div className="cards">
                      {visibleCategories.map((cat) => (
                        <div key={cat.id} onClick={() => setSelectedCategory(cat.type)}>
                            <CategoryCard 
                              title={isEnglish ? cat.title : (cat.title_ar || cat.title)} 
                              image={cat.image} 
                            />
                        </div>
                      ))}
                    </div>

                    {/* Display Matching Items Directly */}
                    {visibleMenuItems.length > 0 && (
                        <div className="menu-list" style={{ marginTop: '10px' }}>
                            <h3 style={{ margin: '0 0 15px', color: '#EAC8CA', padding: '0 5px' }}>
                                {t.foundItems}
                            </h3>
                            {visibleMenuItems.map((item) => (
                                <MenuItemCard 
                                    key={item.id} 
                                    item={{
                                        ...item,
                                        title: isEnglish ? item.title : (item.title_ar || item.title),
                                        description: isEnglish ? item.description : (item.description_ar || item.description)
                                    }}
                                    quantity={cart[item.id] || 0}
                                    onAdd={addToCart}
                                    onRemove={removeFromCart}
                                />
                            ))}
                        </div>
                    )}

                    {/* Show "No Results" only if BOTH lists are empty */}
                    {!hasResults && searchTerm && (
                        <p style={{textAlign:'center', marginTop:'20px', color: '#888'}}>
                            {t.noResults}
                        </p>
                    )}

                    {/* Show "Coming Soon" only if not searching and empty category */}
                    {!searchTerm && visibleCategories.length === 0 && (
                        <p style={{textAlign:'center', marginTop:'20px', color: '#888'}}>
                            {t.comingSoon}
                        </p>
                    )}
                  </>
                ) : (
                  <div className="menu-list">
                    <button className="back-btn" onClick={() => setSelectedCategory(null)}>
                        <i className={`fa-solid ${isEnglish ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i> {t.back}
                    </button>
                    
                    <h2 className="category-title">
                        {(() => {
                            const cat = categoriesData.find(c => c.type === selectedCategory);
                            return cat ? (isEnglish ? cat.title : cat.title_ar) : selectedCategory;
                        })()}
                    </h2>

                    {menuItems[selectedCategory] ? (
                        menuItems[selectedCategory].map((item) => (
                        <MenuItemCard 
                            key={item.id} 
                            item={{
                                ...item,
                                title: isEnglish ? item.title : (item.title_ar || item.title),
                                description: isEnglish ? item.description : (item.description_ar || item.description)
                            }}
                            quantity={cart[item.id] || 0}
                            onAdd={addToCart}
                            onRemove={removeFromCart}
                        />
                        ))
                    ) : (
                        <div style={{textAlign: 'center', padding: '40px', color: '#888'}}>
                            <p>{t.emptyMenu}</p>
                        </div>
                    )}
                  </div>
                )}
            </>
        )}
      </main>

      {totalItems > 0 && !isCheckout && (
        <div className="floating-order-bar">
          <button onClick={() => setIsCheckout(true)}>
            {t.showOrder} ({totalItems})
          </button>
        </div>
      )}
    </div>
  );
}

export default App;