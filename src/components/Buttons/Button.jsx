import './Button.css';

export function Button({children ,variant}) {
    return <button className ={`button--${variant}`}>{children}</button>
}

