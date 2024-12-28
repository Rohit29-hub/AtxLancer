import React from 'react';

interface FormImageSectionProps {
    heading: string;
    message: string;
    quote: string;
    imageUrl: string;
}

const FormImageSection: React.FC<FormImageSectionProps> = ({
    heading,
    message,
    quote,
    imageUrl,
}) => {
    return (
        <div className="flex-1 hidden relative md:block">
            <div className="absolute w-full h-full bg-background opacity-30 dark:opacity-80">
                <div className="text-center p-4 dark:text-white">
                    <h2 className="text-4xl font-bold mb-4">{heading}</h2>
                    <p className="text-lg font-medium mb-6">{message}</p>
                    <p className="text-sm">
                        <em>{`"${quote}"`}</em>
                    </p>
                </div>
            </div>
            <img
                className="w-full h-full object-fill"
                src={imageUrl}
                alt="Form section background"
            />
        </div>
    );
};

export default FormImageSection;
