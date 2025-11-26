import { useNavigate } from 'react-router-dom';

type ButtonProps = {
    someText : string;
    link: string;
};

const Button: React.FC<ButtonProps> = ({ someText, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link.startsWith("http") || link.endsWith(".pdf")) {
            window.open(link, "_blank", "noopener,noreferrer");
        } else {
            navigate(link);
        }
    };

    return (
        <button type="button" onClick={handleClick}>
            {someText}
        </button>
    );
}

export default Button;