
interface Props{
    trigger: () => void;
    children: React.ReactNode;
}


function Button({trigger, children} : Props){

    return (
        <button className="btn btn-primary" onClick={trigger}>
            {children}
        </button>
    );
}


export default Button;