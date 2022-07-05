import * as React from 'react';

export interface IProps {
  //
  show:boolean,

  onClose: (show:boolean) => void

  modalTitle:string,

  smModal?:boolean

  lockBodyScroll?:boolean

  children?: React.ReactNode;
}

// rmodal-component component is the default export

export default function Modal(props: IProps)
