interface ButtonProps {
    text: string;
    color?: string;
};

const Button: React.FC<ButtonProps> = ({ text, color = "bg-secondary" }) => {
    return (
        <button className={`${color} text-black text-sm rounded-lg p-1.5 w-25 ml-5 shadow-lg cursor-pointer`}>
            {text}
        </button>
    );
}

export default Button;
