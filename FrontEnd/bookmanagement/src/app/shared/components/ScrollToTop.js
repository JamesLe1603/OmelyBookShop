import { useEffect,useState } from "react";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollPosition = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={handleScrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
}
export default ScrollToTop;