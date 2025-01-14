import React from 'react';

const Header = () => {
    return (
        <header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '99%',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                fontSize: '20px',
                fontWeight: 'bold',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                My Awesome App
            </div>
            <nav>
                <button
                    style={{
                        backgroundColor: '#0056b3',
                        color: '#fff',
                        padding: '8px 12px',
                        border: 'none',
                        borderRadius: '4px',
                        marginRight: '10px',
                        cursor: 'pointer',
                    }}
                >
                    Home
                </button>
                <button
                    style={{
                        backgroundColor: '#0056b3',
                        color: '#fff',
                        padding: '8px 12px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    About
                </button>
            </nav>
        </header>
    );
};

export default Header;
