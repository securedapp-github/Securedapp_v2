import React, { useState } from 'react';
import Image from 'next/image';

// Importing all blockchain logos
import ethereumLogo from '../../assets/chains/ethereum.png';
import avalancheLogo from '../../assets/chains/avalanche.png';
import bnbLogo from '../../assets/chains/binance.png';
import arbitrumLogo from '../../assets/chains/arbitrum.png';
import optimismLogo from '../../assets/chains/optimism.png';
import gnosisLogo from '../../assets/chains/gnosis.png';
import bobaLogo from '../../assets/chains/boba.png';
import baseLogo from '../../assets/chains/base.png';
import lineaLogo from '../../assets/chains/lineascan.png';
import astarLogo from '../../assets/chains/astar.png';
import celoLogo from '../../assets/chains/celo.png';
import fireLogo from '../../assets/chains/firechain_light.png';
import polygonLogo from '../../assets/chains/polygon.png';

type BlockchainSelectionProps = {
  blockchainName: string;
  onClose: () => void;
  onSelect: (blockchain: string, network: string) => void; // Callback to handle selection
};

const blockchainData = [
  { id: 1, name: 'Ethereum', icon: ethereumLogo },
  { id: 2, name: 'Avalanche', icon: avalancheLogo },
  { id: 3, name: 'Binance Smart Chain', icon: bnbLogo },
  { id: 4, name: 'Arbitrum', icon: arbitrumLogo },
  { id: 5, name: 'Polygon', icon: polygonLogo },
  { id: 6, name: 'Optimism', icon: optimismLogo },
  { id: 7, name: 'Gnosis', icon: gnosisLogo },
  { id: 8, name: 'Boba', icon: bobaLogo },
  { id: 9, name: 'Base', icon: baseLogo },
  { id: 10, name: 'Linea', icon: lineaLogo },
  { id: 11, name: 'Astar', icon: astarLogo },
  { id: 12, name: 'Celo', icon: celoLogo },
  { id: 13, name: '5ireChain', icon: fireLogo },
];

// Define network types for certain blockchains, and fall back to a default if not found
const blockchainNetworkTypes: { [key: string]: string[] } = {
  Ethereum: ['Ethereum', 'Ethereum Classic'],
  Avalanche: ['Mainnet', 'Fuji'],
  Polygon: ['Mainnet', 'Mumbai'],
  BinanceSmartChain: ['Mainnet', 'Testnet'],
};

// Default networks to show when a blockchain doesn't have predefined networks
const defaultNetworks = ['Mainnet', 'Testnet'];

const BlockchainSelection: React.FC<BlockchainSelectionProps> = ({ blockchainName, onClose, onSelect }) => {
  const [selectedBlockchain, setSelectedBlockchain] = useState(blockchainName || 'Ethereum'); // Default selection
  const availableNetworks = blockchainNetworkTypes[selectedBlockchain] || defaultNetworks;

  const [selectedNetwork, setSelectedNetwork] = useState<string>(availableNetworks[0]);

  const handleBlockchainSelect = (blockchain: string) => {
    setSelectedBlockchain(blockchain);
    setSelectedNetwork(blockchainNetworkTypes[blockchain]?.[0] || defaultNetworks[0]);
  };

  const handleConfirm = (network: string) => {
    onSelect(selectedBlockchain, network); // Confirm selection
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-[#011A3B] p-6 rounded-lg w-10/12 h-5/6 relative shadow-lg flex flex-col md:flex-row">
        {/* Left section with scrolling blockchain logos, hidden on mobile */}
        <div className="w-full md:w-1/4 overflow-y-auto pr-4 hidden md:block">
          <h3 className="text-xl font-bold text-white mb-6">List of Blockchains</h3>
          <div className="flex flex-col gap-4">
            {blockchainData.map((blockchain) => (
              <div
                key={blockchain.id}
                className={`flex items-center cursor-pointer p-2 rounded-lg transition ${
                  selectedBlockchain === blockchain.name ? 'bg-gray-600' : 'hover:bg-gray-800'
                }`}
                onClick={() => handleBlockchainSelect(blockchain.name)}
              >
                <Image src={blockchain.icon} alt={blockchain.name} width={40} height={40} />
                <span className="ml-4 text-white">{blockchain.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right section with blockchain details and select buttons */}
        <div className="w-full md:w-3/4 pl-6">
          <h1 className="text-2xl font-bold text-white mb-4">{selectedBlockchain}</h1>
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Choose the appropriate network for this blockchain.
          </p>

          <div className="space-y-4">
            {availableNetworks.map((network) => (
              <div key={network} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                <span className="text-white">{network}</span>
                <button
                  onClick={() => handleConfirm(network)}
                  className="bg-transparent border-green-500 border text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Select Chain
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSelection;
