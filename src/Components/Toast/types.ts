
import checkSign from './icons/checkSign.png'
import crossSign from './icons/crossSign.png'
import warnSign from './icons/warn.png'
import infoSign from './icons/info.png'

export enum toastTypes {
    success='success',
    error ='error',
    info='info',
    warning='warning'

}

export interface contents {
    title: string,
    discription: string
}

export interface contentTest {
    type:string,
    title: string,
    discription: string
}


export const image: { [type in toastTypes as any]: string } = {
    [toastTypes.success]: checkSign,
    [toastTypes.error]: crossSign,
    [toastTypes.info]: infoSign,
    [toastTypes.warning]: warnSign,
}
export const background: { [type in toastTypes as any]: string } = {
    [toastTypes.success]: 'bg-success ',
    [toastTypes.error]: 'bg-danger',
    [toastTypes.info]: 'bg-info',
    [toastTypes.warning]: 'bg-warning',
}

