'use client'
// Server-renderable preloader so it can be shown on initial SSR/hard refresh.
// Keep this as a server component (no 'use client') so it can be rendered
// by Next's server streaming and used as a Suspense fallback in app/layout.js.
export default function SuspensePreloader({ id }) {
    return (
        <>
            {/* Inline critical CSS for animations to ensure they work on first load */}
            <style jsx>{`
                @keyframes letterSlideIn {
                    0% {
                        opacity: 0;
                        transform: translateY(30px) rotateX(-90deg);
                    }
                    50% {
                        opacity: 0.7;
                        transform: translateY(-5px) rotateX(-30deg);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) rotateX(0deg);
                    }
                }
                
                @keyframes underlineExpand {
                    0% {
                        width: 0%;
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        width: 60%;
                        opacity: 1;
                    }
                }
            `}</style>
            
            <div id={id || 'suspense-preloader'}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 9999,
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Times New Roman", Times, serif',
                }}
            >
                <div style={{
                    textAlign: 'center',
                    color: '#2c3e50'
                }}>
                    {/* Animated Brand Name */}
                    <div style={{
                        fontSize: 'clamp(2rem, 7vw, 3.2rem)',
                        fontWeight: '300',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        position: 'relative',
                        overflow: 'visible',
                        whiteSpace: 'nowrap',
                        padding: '0 12px',
                        lineHeight: 1,
                        boxSizing: 'border-box'
                    }}>
                        {'MON PARCOURT'.split('').map((letter, index) => (
                            <span
                                key={index}
                                style={{
                                    display: 'inline-block',
                                    animation: `letterSlideIn 0.8s ease-out ${index * 0.08}s both`,
                                    opacity: 0,
                                    transformOrigin: 'center bottom',
                                    willChange: 'transform, opacity',
                                    WebkitBackfaceVisibility: 'hidden',
                                    backfaceVisibility: 'hidden'
                                }}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </div>

                    {/* Elegant underline animation */}
                    <div style={{
                        width: '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #2c3e50, #34495e, #2c3e50)',
                        margin: '30px auto 0',
                        animation: 'underlineExpand 2s ease-out 1s both'
                    }}></div>
                </div>
            </div>
        </>
    );
}
