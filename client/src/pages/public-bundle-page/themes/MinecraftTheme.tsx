import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface MinecraftThemeProps {
  bundle: Bundle;
}

const MinecraftTheme: React.FC<MinecraftThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Minecraft palette
  const colors = {
    dirt: "#8B5A2B",
    darkDirt: "#694229",
    grass: "#5D9C2F",
    stone: "#92918E",
    darkStone: "#7A7977",
    wood: "#A07B58",
    darkWood: "#7D5F42",
    leaves: "#3A8425",
    cobblestone: "#828282",
    darkCobblestone: "#6B6B6B",
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 relative overflow-hidden"
      style={{ backgroundColor: "#61a5ff", fontFamily: "'MinecraftiaRegular', monospace" }}
    >
      {/* Minecraft sky and terrain background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated clouds */}
        <div className="absolute top-[15%] w-20 h-8 bg-white rounded-full opacity-90 animate-[floatRight_60s_linear_infinite]"></div>
        <div className="absolute top-[10%] left-[20%] w-32 h-12 bg-white rounded-full opacity-90 animate-[floatRight_80s_linear_infinite_10s]"></div>
        <div className="absolute top-[25%] left-[50%] w-28 h-10 bg-white rounded-full opacity-90 animate-[floatRight_70s_linear_infinite_5s]"></div>
        
        {/* Grass block layer */}
        <div 
          className="absolute bottom-0 inset-x-0 h-[40%]"
          style={{ backgroundColor: colors.dirt }}
        >
          {/* Minecraft grass block top pattern */}
          <div 
            className="absolute top-0 inset-x-0 h-12"
            style={{ backgroundColor: colors.grass }}
          >
            {/* Pixelated pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:8px_8px]"></div>
          </div>
          
          {/* Dirt pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[size:16px_16px]"></div>
          
          {/* Spotty texture for dirt */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-black/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: '8px',
                height: '8px',
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[bounceIn_0.6s_ease-out]">
        {/* Minecraft inventory background */}
        <div 
          className="p-6 relative"
          style={{ backgroundColor: "#C6C6C6" }}
        >
          {/* Inventory border */}
          <div className="absolute inset-0 border-8 border-solid" style={{ borderColor: "#DBDBDB #565656 #565656 #DBDBDB" }}></div>
          
          {/* Content container with inner shadow */}
          <div className="relative p-4 border-4 border-solid" style={{ borderColor: "#373737 #FFF #FFF #373737", backgroundColor: "#808080" }}>
            {/* Main inventory content */}
            <div className="bg-black/80 p-6 relative border-2 border-solid" style={{ borderColor: "#373737 #FFF #FFF #373737" }}>
              <div className="flex flex-col items-center text-center">
                {/* Minecraft-style name plate */}
                <div 
                  className="w-full text-center py-2 mb-6 relative"
                  style={{ backgroundColor: colors.wood, color: "#FFFFFF" }}
                >
                  <div className="absolute inset-0 border-4 border-solid" style={{ borderColor: colors.darkWood }}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
                  </div>
                  <h1 className="text-2xl font-bold relative z-10 animate-[pulse_2s_ease-in-out_infinite]">
                    {bundle.displayName.toUpperCase()}
                  </h1>
                </div>

                {/* Player skin head display (avatar) */}
                <div className="mb-6 relative">
                  <div className="w-24 h-24 relative">
                    {/* Overlay grid to simulate pixels */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:4px_4px] z-20 pointer-events-none"></div>
                    
                    {/* Border */}
                    <div className="absolute inset-0 border-2 border-solid" style={{ borderColor: "#565656" }}></div>
                    
                    <img
                      src={bundle.profilePicture || defaultAvatar}
                      alt={bundle.displayName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div 
                  className="px-4 py-1 mb-4 relative"
                  style={{ 
                    backgroundColor: colors.cobblestone,
                    border: `2px solid ${colors.darkCobblestone}`,
                    color: "#FFFFFF"
                  }}
                >
                  <p className="text-sm">
                    @{bundle.bundleName}
                  </p>
                </div>
                
                {bundle.bio && (
                  <div className="mb-6 p-3 w-full relative" style={{ backgroundColor: colors.stone }}>
                    <div className="absolute inset-0 border-2 border-solid" style={{ borderColor: "#DBDBDB #565656 #565656 #DBDBDB" }}></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:8px_8px]"></div>
                    <p className="text-white text-sm relative z-10">
                      {bundle.bio}
                    </p>
                  </div>
                )}
              </div>

              {/* Link items styled as inventory slots */}
              <div className="grid grid-cols-1 gap-2 mt-6">
                {sortedBits.map((bit, index) => (
                  <a
                    key={index}
                    href={bit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    {/* Inventory slot background */}
                    <div 
                      className="w-full p-3 flex items-center relative hover:bg-white/10 transition-colors duration-200"
                      style={{ backgroundColor: "#8b8b8b" }}
                    >
                      {/* Slot border */}
                      <div className="absolute inset-0 border-2 border-solid" style={{ borderColor: "#373737 #FFF #FFF #373737" }}></div>
                      
                      {/* Hover selection effect */}
                      <div className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/70 transition-colors duration-100"></div>
                      
                      {/* Link icon "item" */}
                      <div 
                        className="w-10 h-10 mr-3 flex items-center justify-center relative bg-gray-700"
                        style={{ border: "2px solid #373737" }}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2px_2px]"></div>
                        <span className="text-white text-lg relative z-10">
                          {bit.icon || "⛏️"}
                        </span>
                      </div>
                      
                      {/* Link text as item name */}
                      <span className="text-white font-bold group-hover:text-yellow-200 transition-colors duration-200">
                        {bit.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Footer - Experience bar */}
              <div className="mt-8 w-full h-4 bg-black relative">
                <div className="absolute inset-y-0 left-0 bg-green-500 w-[70%]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-xs">
                  Level 64
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinecraftTheme;