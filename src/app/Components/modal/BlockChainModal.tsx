import React from 'react';
import Image from 'next/image';
import ethereum from '@/assets/chains/ethereum.png';
import BNB from '@/assets/chains/binance.png';
// import bitcoin from '@/assets/chains/bitcoin.png'; // Ensure the path is correct
// import cardano from '@/assets/chains/cardano.png'; // Ensure the path is correct

type BlockchainModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (name: string) => void;
};

const blockchainIcons = [
    { id: 1, name: "Ethereum", icon: ethereum },
    { id: 2, name: "Bitcoin", icon: ethereum },
    { id: 3, name: "Cardano", icon: ethereum },
    { id: 4, name: "Binance", icon: BNB },
    // Add other blockchains similarly
];

const BlockchainModal: React.FC<BlockchainModalProps> = ({ isOpen, onClose, onSelect }) => {
    if (!isOpen) return null;

    const handleSelect = (name: string) => {
        onSelect(name);
        onClose(); // Close modal after selection
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#011A3B] p-5 rounded-lg max-w-lg w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Select Blockchain</h2>
                    <button onClick={onClose}>Close</button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {blockchainIcons.map((blockchain) => (
                        <div 
                            key={blockchain.id} 
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => handleSelect(blockchain.name)} // Handle selection
                        >
                            <Image 
                                src={blockchain.icon} 
                                alt={blockchain.name} 
                                width={50} 
                                height={50} 
                                className='m-3 p-2 rounded-full bg-gray-200 bg-opacity-20' 
                            />
                            <span className="text-sm">{blockchain.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlockchainModal;
