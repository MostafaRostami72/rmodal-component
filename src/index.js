import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {SlideInBottomAnimate, SlideInBottomAnimateMobile, SlideOutBottomAnimate, SlideOutBottomAnimateMobile} from "./components/animations";

const Portal = ({show, children, onClose}) => {
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

        setTimeout(() => {
            onClose(true);
        }, 300)
    };

    const handleDragEnd = (event) => {
        event.preventDefault();
        if (window.innerWidth < 767) {
            const {pageY, pageX} = event.changedTouches[0];
            const contentHeight = contentRef.current.clientHeight;
            const allowDray = (window.innerHeight - (contentHeight / 2)) + 10;
            if (pageY > allowDray) {
                handleClose();
            } else {
                bodyRef.current.style.top = 'calc(100% - ' + contentHeight + 'px)';
            }
        }
    };

    const handleDrag = (event) => {
        event.preventDefault();
        if (window.innerWidth < 767) {
            const {pageY, pageX} = event.touches[0];
            const contentHeight = contentRef.current.clientHeight;

            if ((window.innerHeight - contentHeight) <= pageY) {
                bodyRef.current.style.top = pageY + 'px';
            }
        }
    };

    useEffect(() => {
        headerRef.current.addEventListener('touchend', handleDragEnd);
        headerRef.current.addEventListener('touchmove', handleDrag);
        return () => {
            headerRef.current.removeEventListener('touchend', handleDrag);
            headerRef.current.removeEventListener('touchmove', handleDrag);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth < 767) {
            const contentHeight = contentRef.current.clientHeight;
            const windowsHeight = window.innerHeight;

            if (contentHeight < windowsHeight) {
                bodyRef.current.style.top = 'calc(100% - ' + contentHeight + 'px)';
            } else {
                bodyRef.current.style.top = '80px';
            }
        }
    }, [show]);

    return (
        <Container ref={containerRef} className="r-modal-component">
            <Backdrop ref={backdropRef} onClick={(e) => handleClose(e)} className={"fade " + (show ? 'in' : '')}/>

            <Body ref={bodyRef} role="dialog" className={'rmc-dialog modal-dialog-scrollable bottom ' + (show ? 'show-modal slide-in' : 'slide-out')}>
                <Dialog>
                    <DialogContent ref={contentRef}>
                        <Header ref={headerRef} className="rmc-header">
                            <CloseLine className="rmc-header-close-line"/>

                            <ModalClose className="rmc-header-close" onClick={(e) => handleClose(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.89 11.89"><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><line x1="0.53" y1="0.53" x2="11.36" y2="11.36" fill="none" stroke="#222" stroke-linejoin="round" stroke-width="1.5"/><line x1="11.36" y1="0.53" x2="0.53" y2="11.36" fill="none" stroke="#222" stroke-linejoin="round" stroke-width="1.5"/></g></g></svg>
                            </ModalClose>

                            <h4 className="rmc-title">Modal Title</h4>
                        </Header>


                        <DialogBody className="rmc-content">
                            {children}
                        </DialogBody>
                    </DialogContent>
                </Dialog>
            </Body>
        </Container>
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

// styles

const Container = styled.div`
    position: fixed;
    z-index: 1050;
    top: 0;
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    background-color: #272c36;
    
    &.fade {
        opacity: 0;
        -webkit-transition: opacity .5s ease-in;
        transition: opacity .5s ease-in;
    }
    
    &.in {
        opacity: .3;
    }
`;

const ModalClose = styled.button`
    background-color: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    box-shadow: none;
    position: absolute;
    display: flex;
    right: 24px;
    z-index: 3;

    @media (max-width: 768px) {
        display: none;
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;

const DialogBody = styled.div`
    position: relative;
    padding: 0 24px;
    
    .modal-dialog-scrollable & {
         @media (min-width: 768px) {
             max-height: calc(100vh - 20rem);
             overflow-y: auto;
         }
         
         @media (max-width: 767px) {
             max-height: calc(100vh - 116px);
             overflow-y: auto;
             padding-left: 16px;
             padding-right: 16px;
         }
    }
`;

const DialogContent = styled.div`
    position: absolute;
    background-color: #fff;
    outline: 0;
    width: 100%;
    -webkit-box-shadow: 0 4px 4px rgba(0,0,0,.12), 0 0 10px rgba(0,0,0,.06);
    box-shadow: 0 4px 4px rgba(0,0,0,.12), 0 0 10px rgba(0,0,0,.06);
    border-radius: 8px;
    padding: 0;
    
    @media (max-width: 767px) {
        border-radius: 16px 16px 0 0;
        padding: 0 0 16px 0;
    }
`;

const Dialog = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Body = styled.div`
    display: block;
    position: fixed;
    z-index: 1050;
    outline: 0;
    left: 50%;
    width: 100%;
    max-width: 600px;
    min-height: 200px;
    
    @media (max-width: 767px) {
        left: 0;
        height: auto;
    }
    
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
        
    &.slide-in {
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    
        &.bottom {
            animation-name: ${SlideInBottomAnimate};
            
            @media (max-width: 767px) {
                animation-name: ${SlideInBottomAnimateMobile};
            }
        }
    }
    
    &.slide-out {
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
        
        &.bottom {
            animation-name: ${SlideOutBottomAnimate};
            
            @media (max-width: 767px) {
                animation-name: ${SlideOutBottomAnimateMobile};
            }
        }
    }
    
    &.modal-dialog-scrollable {
         display: flex;
         max-height: calc(100% - 1rem);
    }
`;

const Header = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 16px 16px 0 0;
    background-color: #ffffff;
    padding: 16px 0;
    text-align: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const CloseLine = styled.span`
    width: 36px;
    border-radius: 40px;
    border-bottom: 4px solid #dbdbdb;
    margin-bottom: 24px;
    
    @media (min-width: 767px) {
        display: none;
    }
`;