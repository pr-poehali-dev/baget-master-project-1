const PageBackground = () => {
  return (
    <div 
      className="fixed inset-0 bg-cover bg-center -z-10" 
      style={{ backgroundImage: "url('https://cdn.poehali.dev/files/f10f6f99-7a9c-4bc7-a6da-40ce12959391.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/80"></div>
    </div>
  );
};

export default PageBackground;
