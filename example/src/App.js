import React, {useState} from 'react'
import Modal from 'rmodal-component';
import styled from 'styled-components';
import ModalProps from "./props";
import 'rmodal-component/dist/index.css'

const App = () => {
    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <div className="container mt-3 mt-lg-5">
            <h1 style={{'fontSize': '32px'}}>React Modal Component (draggable drawer in mobile devices)</h1>
            <p className="mt-5">✔️ A great package to easily create beautiful modal in React.</p>
            <p>✔️ In desktop devices in modal and in mobile device is draggable drawer.</p>
            <p>✔️ In mobile device can close modal with dragging like instagram modals.</p>
            <p>✔️ Close the modal by dragging the top of the modal in mobile devices.</p>
            <p className="mt-3 text-success">✔️ You can apply your own styles based on the class names.</p>
            <p className="mt-3 text-success">✔️ Lock Body scroll when modal opened.</p>


            <Section>
                <h2>Examples</h2>
                <p>Test in mobile mode to test draggable.</p>

                <div className="mt-5 d-flex flex-wrap">
                    <div className="mr-2 mt-2 mt-md-0">
                        <button type="button" onClick={() => setShow(true)} className="btn btn-primary">default modal</button>
                    </div>

                    <Modal show={show} onClose={() => setShow(false)} modalTitle={"default modal Title"}>

                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    </Modal>


                    <div className="mr-2 mt-2 mt-md-0">
                        <button type="button" onClick={() => setSmShow(true)} className="btn btn-success">sm modal</button>
                    </div>

                    <Modal show={smShow} onClose={() => setSmShow(false)} smModal={true} modalTitle={"sm modal Title"}>

                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    </Modal>

                    <div className="mr-2 mt-2 mt-md-0">
                        <button type="button" onClick={() => setShow2(true)} className="btn btn-secondary">open modal with body scroll lock</button>
                    </div>

                    <Modal show={show2} onClose={() => setShow2(false)} lockBodyScroll={true} modalTitle={"modal with body scroll lock"}>

                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    </Modal>

                    <div className="mr-2 mt-2 mt-md-0">
                        <button type="button" onClick={() => setShow3(true)} className="btn btn-danger">Confirm modal</button>
                    </div>

                    <Modal show={show3} onClose={() => setShow3(false)} lockBodyScroll={true} smModal={true} modalTitle={"Are you sure?"}>
                        <div className="text-center">
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="96px" height="96px" viewBox="0 0 24 24" aria-labelledby="cancelIconTitle" stroke="red" stroke-width="0.5" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="red"><title id="cancelIconTitle">Cancel</title>
                                <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339"/>
                                <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z"/>
                            </svg>
                        </div>

                        <p className="mt-3 text-center">Do you really want to delete these records? this process cannot be undone.</p>

                        <div className="mt-4 d-flex align-items-center justify-content-around">
                            <button type="button" className="btn btn-danger flex-grow-1 mr-2">Delete</button>
                            <button type="button" className="btn btn-dark flex-grow-1" onClick={() => setShow3(false)}>Cancel</button>
                        </div>
                    </Modal>


                </div>
            </Section>


            <Section>
                <h2>Install</h2>
                <hr/>
                <Pre>
                    <code>
                        npm install --save rmodal-component
                    </code>
                </Pre>
            </Section>

            <Section>
                <h2>Usage</h2>
                <hr/>

                <div className="mt-3">
                    <h4 className="mb-3">1 - Import component</h4>
                    <Pre>
                        <code className="d-block">
                            import Modal from 'rmodal-component';
                        </code>
                        <code className="d-block">
                            import 'rmodal-component/dist/index.css'
                        </code>
                    </Pre>
                </div>

                <div className="mt-5">
                    <h4 className="mb-3">2 - Add the component markup to your react component</h4>
                    <Pre>
                        <code>
                            {
                                'import React, {useState} from \'react\';\n' +
                                'import Modal from \'rmodal-component\';\n' +
                                '\n' +
                                'const Example = () => {\n' +
                                '    const [show, setShow] = useState(false);\n' +
                                '    \n' +
                                '    return (\n' +
                                '        <div>\n' +
                                '            <Modal show={show} onClose={() => setShow(false)} smModal={true} modalTitle={"modal Title"}>\n' +
                                '                ...\n' +
                                '            </Modal>\n' +
                                '        </div>\n' +
                                '    );\n' +
                                '};\n' +
                                '\n' +
                                'export default Example;\n'
                            }
                        </code>
                    </Pre>
                </div>
            </Section>

            <Section>
                <h2>Props</h2>

                <div className="mt-3">
                    <ModalProps/>
                </div>
            </Section>

        </div>
    )
}

export default App

// styles

const Section = styled.div`
    margin: 80px 0;
    
    @media (max-width: 768px) {
        margin: 56px 0;
    }
`;

export const Pre = styled.pre`
    background-color: #ebebeb;
    font-size: .937rem;
    padding: 12px;
    border-radius: 8px;
`;