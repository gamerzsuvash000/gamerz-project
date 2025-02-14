import './TabButton.css';

export default function TabButton({ children, isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button 
        className={`tab-button ${isSelected ? 'active' : ''}`}
        {...props}
      >
        {children}
      </button>
    </li>
  );
}
