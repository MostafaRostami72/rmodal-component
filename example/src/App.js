import React, {useState} from 'react'
import Modal from 'rmodal-component';
import styled from 'styled-components';
import ModalProps from "./props";
import 'rmodal-component/dist/index.css'

const App = () => {
    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <div className="container mt-3 mt-lg-5">
            <h1 style={{'fontSize':'32px'}}>React Modal Component (draggable drawer in mobile devices)</h1>
            <p className="mt-5">✔️ A great package to easily create beautiful modal in React.</p>
            <p>✔️ In desktop devices in modal and in mobile device is draggable drawer.</p>
            <p>✔️ In mobile device can close modal with dragging like instagram modals.</p>
            <p>✔️ Close the modal by dragging the top of the modal in mobile devices.</p>
            <p className="mt-3 text-success">✔️ You can apply your own styles based on the class names.</p>
            <p className="mt-3 text-success">✔️ Lock Body scroll when modal opened.</p>


            <Section>
                <h2>Examples</h2>
                <p>Test in mobile mode to test draggable.</p>

                <div className="mt-5">
                    <button type="button" onClick={() => setShow(true)} className="btn btn-primary">default modal</button>

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


                    <button type="button" onClick={() => setSmShow(true)} className="btn btn-success ml-4">sm modal</button>

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

                    <button type="button" onClick={() => setShow2(true)} className="btn btn-secondary ml-4">open modal with body scroll lock</button>

                    <Modal show={show2} onClose={() => setShow2(false)} lockBodyScroll={true} smModal={true} modalTitle={"modal with body scroll lock"}>

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