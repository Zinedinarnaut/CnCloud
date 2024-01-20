// FeatureCard.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { FaCheckCircle, FaHistory, FaComment, FaUser } from 'react-icons/fa'; // Import the icons you want to use

interface FeatureCardProps {
    title: string;
    description: string;
    icon: IconType; // Change the type to IconType
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
    return (
        <div className="bg-card dark:bg-dark-card p-6 rounded-md shadow-md">
            <div className="flex items-center justify-center mb-4">
                <Icon size={32} /> {/* Set the desired size */}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
    );
};

export default FeatureCard;
