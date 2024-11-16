function Panel({ className = '', children }) {
    return (
      <div className={`border border-black p-1 d-flex flex-wrap gap-2 ${className}`}>
        {children}
      </div>
    );
  }
  
  export default Panel;