import React, { useState } from 'react';

type BlockchainSelectionProps = {
    blockchainName: string;
    onClose: () => void;
    onSelect: (blockchain: string, network: string) => void; // Callback to handle selection
};

// Define network types for certain blockchains, and fall back to a default if not found
const blockchainNetworkTypes: { [key: string]: string[] } = {
    Ethereum: ['Mainnet', 'Sepolia'],
    Avalanche: ['Mainnet', 'Fuji'],
    Polygon: ['Mainnet', 'Mumbai'],
    BinanceSmartChain: ['Mainnet', 'Testnet'],
};

// Default networks to show when a blockchain doesn't have predefined networks
const defaultNetworks = ['Mainnet', 'Testnet'];

const BlockchainSelection: React.FC<BlockchainSelectionProps> = ({ blockchainName, onClose, onSelect }) => {
    // Use predefined networks if available, otherwise fall back to default networks
    const availableNetworks = blockchainNetworkTypes[blockchainName] || defaultNetworks;

    const [selectedNetwork, setSelectedNetwork] = useState<string>(availableNetworks[0]);

    const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNetwork(event.target.value);
    };

    const handleConfirm = () => {
        // Call the onSelect function with the selected blockchain and network
        onSelect(blockchainName, selectedNetwork);
        onClose(); // Close the modal after selection
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-[#011A3B] p-6 rounded-lg max-w-lg w-full relative shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white">Select Network for {blockchainName}</h3>
                    <button onClick={onClose} className="text-white text-lg focus:outline-none">
                        ✕
                    </button>
                </div>
                <div>
                    <select
                        className="w-full p-2 rounded bg-gray-800 text-white mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={selectedNetwork}
                        onChange={handleNetworkChange}
                    >
                        {availableNetworks.map((network) => (
                            <option key={network} value={network}>
                                {network}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Display the selected blockchain and network */}
                <div className="text-white mb-6">
                    <p>
                        Selected Blockchain: <strong>{blockchainName}</strong>
                    </p>
                    <p>
                        Selected Network: <strong>{selectedNetwork}</strong>
                    </p>
                </div>

                <div className="mt-4 flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlockchainSelection;
