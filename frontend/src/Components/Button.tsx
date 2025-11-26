import { useNavigate } from 'react-router-dom';

type ButtonProps = {
    someText : string;
    link: string;
};

const Button: React.FC<ButtonProps> = ({ someText, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <button type="button" onClick={handleClick}>
            {someText}
        </button>
    );
}

export default Button;