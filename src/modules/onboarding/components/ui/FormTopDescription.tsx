import { Link } from 'react-router-dom'

interface FormDescriptionProps {
    formTitle: string;
    formMessage: string;
    formLink: string;
    formLinkTitle: string;
}
const FormTopDescription = ({
    formTitle,
    formMessage,
    formLink,
    formLinkTitle
}: FormDescriptionProps) => {
    return (
        <div className="flex flex-col items-center mb-6">
            <h1 className="text-3xl font-bold font-atxlancer_primary text-atxlancer_base_color dark:text-atxlancer_white_color">
                {formTitle}
            </h1>
            <p className="mt-2 text-sm font-medium text-gray-500 dark:text-atxlancer_white_color">
                {formMessage}{" "}
                <Link to={`../${formLink}`} replace className="text-blue-600 hover:underline">
                    {formLinkTitle}
                </Link>
            </p>
        </div>
    );
};

export default FormTopDescription;