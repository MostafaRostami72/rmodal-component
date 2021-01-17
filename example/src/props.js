import React from 'react';

export default function ModalProps() {
    return (
        <div className="table-responsive">
            <table className="table table-striped ">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Default</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>modalTitle</td>
                    <td>required</td>
                    <td>string</td>
                    <td>set title for modal</td>
                </tr>

                <tr>
                    <td>show</td>
                    <td>required</td>
                    <td>boolean</td>
                    <td>set true for show modal</td>
                </tr>

                <tr>
                    <td>onClose</td>
                    <td>required</td>
                    <td>function</td>
                    <td>Runs when the modal is closing</td>
                </tr>

                <tr>
                    <td>smModal</td>
                    <td>false</td>
                    <td>boolean</td>
                    <td>Reduces modal size</td>
                </tr>

                <tr>
                    <td>lockBodyScroll</td>
                    <td>false</td>
                    <td>boolean</td>
                    <td>set true for lock body scroll when modal opened</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}