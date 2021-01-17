import React, {useRef, useEffect} from 'react';
import './style.scss'

const Portal = ({show, children, onClose, modalTitle, smModal = false, lockBodyScroll = false}) => {
    const containerRef = useRef('');
    const bodyRef = useRef('');
    const contentRef = useRef('');
    const headerRef = useRef('');
    const backdropRef = useRef('');

    const handleClose = (e) => {
        if (containerRef.current.children.length) {
            for (let item of containerRef.current.children) {
                if (item) {
                    item.classList.remove('show-modal')
                }
            }
        }

        containerRef.current.classList.remove('show-modal');
        backdropRef.current.classList.remove('in');
        bodyRef.current.classList.add('slide-out');

        const root = document.getElementsByTagName('html')[0];
        root.classList.remove('html-modal-open');

        setTimeout(() => {
            onClose(true);
        }, 300)
    };

    const handleDragEnd = (event) => {
        event.preventDefault();
        if (window.innerWidth < 767) {
            const {clientY, pageX} = event.changedTouches[0];
            const contentHeight = contentRef.current.clientHeight;
            const windowsHeight = window.innerHeight;
            const allowDray = (windowsHeight - (contentHeight / 2)) + 10;

            if (clientY > allowDray) {
                handleClose();
            } else {
                if (contentHeight < windowsHeight) {
                    bodyRef.current.style.height = contentHeight + 'px';
                } else {
                    bodyRef.current.style.height = 'calc(100vh - 80px)';
                }
            }
        }
    };

    const handleDrag = (event) => {
        event.preventDefault();

        if (window.innerWidth < 767) {
            const {clientY, pageX} = event.touches[0];
            const contentHeight = contentRef.current.clientHeight;

            if ((window.innerHeight - contentHeight) <= (clientY - 80)) {
                bodyRef.current.style.height = 'calc(100vh - ' + clientY + 'px)';
            }
        }
    };

    useEffect(() => {
        headerRef.current.addEventListener('touchend', handleDragEnd, false);
        headerRef.current.addEventListener('touchmove', handleDrag, false);

        return () => {
            headerRef.current.removeEventListener('touchend', handleDrag);
            headerRef.current.removeEventListener('touchmove', handleDrag);
        };
    }, []);

    useEffect(() => {
        const contentHeight = contentRef.current.clientHeight;

        if (window.innerWidth < 768) {
            const windowsHeight = window.innerHeight;
            if (contentHeight < windowsHeight) {
                bodyRef.current.style.height = contentHeight + 'px';
            } else {
                bodyRef.current.style.height = 'calc(100vh - 80px)';
            }
        }
    });

    useEffect(() => {
        const root = document.getElementsByTagName('html')[0];

        if (show && lockBodyScroll) {
            root.classList.add('html-modal-open');
        } else {
            root.classList.remove('html-modal-open');
        }
    }, [show]);

    return (
        <div ref={containerRef} className="rmodal-component">
            <div ref={backdropRef} onClick={(e) => handleClose(e)} className={"rmc-back-drop fade " + (show ? 'in' : '')}/>

            <div ref={bodyRef} role="dialog" className={'rmc-body modal-dialog-scrollable bottom ' + (show ? 'show-modal slide-in ' : 'slide-out ') + (smModal ? 'modal-sm ' : '')}>
                <div className="rmc-dialog">
                    <div className="rmc-dialog-content" ref={contentRef}>
                        <div ref={headerRef} className="rmc-header">
                            <span className="rmc-header-close-line"/>

                            <button className="rmc-header-close" onClick={(e) => handleClose(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.89 11.89">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_2-2" data-name="Layer 2">
                                            <line x1="0.53" y1="0.53" x2="11.36" y2="11.36" fill="none" stroke="#222" stroke-linejoin="round" stroke-width="1.5"/>
                                            <line x1="11.36" y1="0.53" x2="0.53" y2="11.36" fill="none" stroke="#222" stroke-linejoin="round" stroke-width="1.5"/>
                                        </g>
                                    </g>
                                </svg>
                            </button>

                            <h4 className="rmc-title">{modalTitle}</h4>
                        </div>


                        <div className="rmc-content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

/**
 * @return {string}
 */
function Modal(props) {
    if (props.show) {
        return <Portal {...props}/>
    } else {
        return '';
    }
}

export default Modal;