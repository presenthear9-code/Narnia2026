import './index.css';

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

const toggleMenu = () => {
    if (mobileMenu) mobileMenu.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
};

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Snow Effect
const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow-particle');
    const size = Math.random() * 3 + 1 + 'px';
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.top = '-5px';
    snowflake.style.opacity = (Math.random() * 0.4 + 0.2).toString();
    const duration = Math.random() * 12 + 8 + 's';
    snowflake.style.animation = `fall ${duration} linear forwards`;
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), parseFloat(duration) * 1000);
};
setInterval(createSnowflake, 400);

// Cast Data
const castData = [
    { name: "Larissa Pimenta", role: "Lúcia", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Larissa-Pimenta.jpeg", position: "object-top" },
    { name: "Arthur Miguel", role: "Edmundo", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Arthur-Miguel-.jpeg", position: "object-top" },
    { name: "Thalyson Santiago", role: "Pedro", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Thalyson-Santiago-.jpeg", position: "object-top" },
    { name: "Evelyn Nughes", role: "Susana", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Evelyn-Nughes-.jpeg", position: "object-center", scaleClass: "scale-[1.15] origin-center group-hover:scale-[1.25]" },
    { name: "Gilberto Júnior Gil", role: "Aslan", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Gilberto-Junior-Gil-.jpeg", position: "object-top" },
    { name: "Bruna Raste", role: "Jadis", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Bruna-Raste.jpeg", position: "object-top" },
    { name: "Douglas Challub", role: "Lobo", image: "https://ndigitais.shop/wp-content/uploads/2026/06/Douglas.png", position: "object-top" },
    { name: "Naldo Nacimento", role: "Raposa", image: "https://ndigitais.shop/wp-content/uploads/2026/06/naldo.png", position: "object-top" },
    { name: "Olivia Ribeiro", role: "Brigitte", image: "https://ndigitais.shop/wp-content/uploads/2026/06/Olivia.png", position: "object-top" },
    { name: "André Nascimento", role: "Sr Castor", image: "https://ndigitais.shop/wp-content/uploads/2026/04/ANDRE_NASCIMENTO.jpg", position: "object-top" },
    { name: "Angel", role: "Sra Castor", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Angel.jpeg", position: "object-top" },
    { name: "Eliaz Ferraz", role: "Tumnus", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Eliaz-Ferraz-.jpeg", position: "object-top" },
    { name: "Tiago Lisboa", role: "Maugrim", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Tiago-Lisboa.jpeg", position: "object-center" },
    { name: "Nathan Lucas", role: "Trumpkin", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Nathan-Lucas-.jpeg", position: "object-top" },
    { name: "Júlio Oliveira", role: "Professor Digory", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Julio-Oliveira.jpeg", position: "object-top" },
    { name: "Ana Carolina", role: "D. Marta", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Ana-Carolina.jpeg", position: "object-center", scaleClass: "scale-[1.15] origin-center group-hover:scale-[1.25]" },
    { name: "Amanda Daniely", role: "Sra. Pevensie", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Amanda-Daniely.jpeg", position: "object-top" },
    { name: "Grupo de Dança", role: "Dança", image: "https://ndigitais.shop/wp-content/uploads/2026/03/Danca.jpeg", position: "object-top" }
];

const castCarousel = document.getElementById('cast-carousel');
if (castCarousel) {
    castData.forEach((member) => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'flex-none w-[260px] md:w-72 scroll-snap-align-center';
        const zoomEffect = member.scaleClass || 'group-hover:scale-110';
        
        // Setup kebab-case and other name values for robust fallback checks
        const cleanName = member.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // removes accents
        const kebab = cleanName.replace(/\s+/g, '-');
        const snakeCap = cleanName.toUpperCase().replace(/\s+/g, '_');
        
        memberDiv.innerHTML = `
            <div class="relative p-4 md:p-6 bg-[#2a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <div class="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leather.png')]"></div>
                <div class="relative p-4 bg-[#EFE9DC] border-[16px] border-double border-[#8E7B5B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5),0_0_20px_rgba(142,123,91,0.4)]">
                    <div class="absolute inset-0 border border-[#5A3E2B]/40 pointer-events-none"></div>
                    <div class="relative aspect-[3/4] overflow-hidden bg-black">
                        <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover ${member.position} grayscale brightness-110 contrast-125 transition-transform duration-700 ${zoomEffect}"
                            data-fallback-index="0"
                            data-kebab="${kebab}"
                            data-snake="${snakeCap}"
                            data-role="${member.role.toLowerCase()}"
                            onerror="
                                if (!this.dataset.tried) {
                                    this.dataset.tried = '1';
                                    const keb = this.dataset.kebab;
                                    const snk = this.dataset.snake;
                                    const rol = this.dataset.role;
                                    const fallbacks = [
                                        'https://ndigitais.shop/wp-content/uploads/2026/04/' + snk + '.jpg',
                                        'https://ndigitais.shop/wp-content/uploads/2026/03/' + keb + '-.jpeg',
                                        'https://ndigitais.shop/wp-content/uploads/2026/03/' + keb + '.jpeg',
                                        'https://ndigitais.shop/wp-content/uploads/2026/04/' + keb + '.jpeg',
                                        'https://ndigitais.shop/wp-content/uploads/2026/04/' + snk + '.jpeg',
                                        'https://ndigitais.shop/wp-content/uploads/2026/03/' + keb + '.png'
                                    ];
                                    
                                    // Theme fallback if the specific character images fail completely
                                    if (rol.includes('lobo') || rol.includes('wolf')) {
                                        fallbacks.push('https://images.unsplash.com/photo-1590424753856-fdf4d5b05814?auto=format&fit=crop&w=600&q=80');
                                    } else if (rol.includes('raposa') || rol.includes('fox')) {
                                        fallbacks.push('https://images.unsplash.com/photo-1474314881476-818a4adbcaf5?auto=format&fit=crop&w=600&q=80');
                                    } else if (rol.includes('brigitte')) {
                                        fallbacks.push('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80');
                                    } else {
                                        fallbacks.push('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80');
                                    }
                                    
                                    let currentIdx = 0;
                                    const tryNextUrl = () => {
                                        if (currentIdx < fallbacks.length) {
                                            const nextUrl = fallbacks[currentIdx++];
                                            const tempImg = new Image();
                                            tempImg.onload = () => { this.src = nextUrl; };
                                            tempImg.onerror = tryNextUrl;
                                            tempImg.src = nextUrl;
                                        }
                                    };
                                    tryNextUrl();
                                }
                            "
                            referrerPolicy="no-referrer" />
                        <div class="absolute inset-0 bg-[#8E7B5B]/10 mix-blend-overlay"></div>
                    </div>
                </div>
                <div class="mt-6 text-center">
                    <p class="text-[#8E7B5B] text-[10px] uppercase tracking-[0.3em] font-bold mb-1">${member.role}</p>
                    <h4 class="text-[#EFE9DC] serif italic text-xl">${member.name}</h4>
                </div>
                <div class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#8E7B5B]/40"></div>
                <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#8E7B5B]/40"></div>
                <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#8E7B5B]/40"></div>
                <div class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#8E7B5B]/40"></div>
            </div>
        `;
        castCarousel.appendChild(memberDiv);
    });

    // Carousel Auto-scroll
    let isPaused = false;
    castCarousel.addEventListener('mouseenter', () => isPaused = true);
    castCarousel.addEventListener('mouseleave', () => isPaused = false);

    setInterval(() => {
        if (isPaused) return;
        const { scrollLeft, scrollWidth, clientWidth } = castCarousel;
        const maxScroll = scrollWidth - clientWidth;
        const cardWidth = window.innerWidth < 768 ? 280 : 320;
        
        if (scrollLeft >= maxScroll - 10) {
            castCarousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            castCarousel.scrollTo({ left: scrollLeft + cardWidth, behavior: 'smooth' });
        }
    }, 3000);

    const prevBtn = document.getElementById('prev-cast');
    const nextBtn = document.getElementById('next-cast');
    if (prevBtn) prevBtn.onclick = () => {
        const cardWidth = window.innerWidth < 768 ? 280 : 320;
        castCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    };
    if (nextBtn) nextBtn.onclick = () => {
        const cardWidth = window.innerWidth < 768 ? 280 : 320;
        castCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    };
}

// Characters Data
interface Character {
    id: string;
    charName: string;
    actorName: string;
    image: string;
    sidebarGradient: string;
    photoBg: string;
    position: string;
    scaleClass?: string;
}

const charactersData: Character[] = [
    {
        id: "aslan",
        charName: "Aslan",
        actorName: "Gilberto Júnior Gil",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Aslan-Gilberto-Junior-Gil.jpg",
        sidebarGradient: "from-[#422912] to-[#1a1006]",
        photoBg: "from-[#2d1b0d] to-[#0d0904]",
        position: "object-top"
    },
    {
        id: "jadis",
        charName: "Jadis",
        actorName: "Bruna Raste",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Jadis-Bruna-Raste.jpg",
        sidebarGradient: "from-[#19323f] to-[#0b171f]",
        photoBg: "from-[#10222b] to-[#050a0f]",
        position: "object-top"
    },
    {
        id: "lucia",
        charName: "Lúcia",
        actorName: "Larissa Pimenta",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Lucia-Larissa-Pimenta.jpg",
        sidebarGradient: "from-[#12311b] to-[#06140a]",
        photoBg: "from-[#0b2111] to-[#030a05]",
        position: "object-top"
    },
    {
        id: "edmundo",
        charName: "Edmundo",
        actorName: "Arthur Miguel",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Edmundo-Arthur-Miguel.jpg",
        sidebarGradient: "from-[#3d1010] to-[#1a0505]",
        photoBg: "from-[#290a0a] to-[#0d0202]",
        position: "object-top"
    },
    {
        id: "pedro",
        charName: "Pedro",
        actorName: "Thalyson Santiago",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Pedro-Thalyson-Santiago.jpg",
        sidebarGradient: "from-[#3d2f10] to-[#1a1305]",
        photoBg: "from-[#291e0a] to-[#0d0702]",
        position: "object-top"
    },
    {
        id: "susana",
        charName: "Susana",
        actorName: "Evelyn Nughes",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Susana-Evelyn-Nughes.jpg",
        sidebarGradient: "from-[#2a133d] to-[#11051c]",
        photoBg: "from-[#1c0a29] to-[#07020d]",
        position: "object-center",
        scaleClass: "scale-[1.15] origin-center group-hover:scale-[1.25]"
    },
    {
        id: "srcastor",
        charName: "Sr. Castor",
        actorName: "André Nascimento",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Sr-Castor-Andre-Nascimento.jpg",
        sidebarGradient: "from-[#2c2016] to-[#100b07]",
        photoBg: "from-[#1a130d] to-[#080503]",
        position: "object-top"
    },
    {
        id: "sracastor",
        charName: "Sra. Castor",
        actorName: "Angel",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Sra-Castor-Angel.jpg",
        sidebarGradient: "from-[#30261f] to-[#140f0c]",
        photoBg: "from-[#201814] to-[#080605]",
        position: "object-top"
    },
    {
        id: "tumnus",
        charName: "Tumnus",
        actorName: "Eliaz Ferraz",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Tumnus-Eliaz-Ferraz.jpg",
        sidebarGradient: "from-[#331c0e] to-[#140a04]",
        photoBg: "from-[#221208] to-[#0a0502]",
        position: "object-top"
    },
    {
        id: "maugrim",
        charName: "Maugrim",
        actorName: "Tiago Lisboa",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Maugrim-Tiago-Lisboa.jpg",
        sidebarGradient: "from-[#212426] to-[#0f1012]",
        photoBg: "from-[#151718] to-[#070809]",
        position: "object-center"
    },
    {
        id: "trumpkin",
        charName: "Trumpkin",
        actorName: "Nathan Lucas",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Trumpkin-Nathan-Lucas.jpg",
        sidebarGradient: "from-[#20292b] to-[#0c1011]",
        photoBg: "from-[#141b1c] to-[#050607]",
        position: "object-top"
    },
    {
        id: "digory",
        charName: "Prof. Digory",
        actorName: "Júlio Oliveira",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Professor-Digory-Julio-Oliveira.jpg",
        sidebarGradient: "from-[#2d251d] to-[#110e0a]",
        photoBg: "from-[#1e1913] to-[#070503]",
        position: "object-top"
    },
    {
        id: "marta",
        charName: "D. Marta",
        actorName: "Ana Carolina",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/D.-Marta-Ana-Carolina.jpg",
        sidebarGradient: "from-[#1f2824] to-[#0c100e]",
        photoBg: "from-[#141a17] to-[#050605]",
        position: "object-center",
        scaleClass: "scale-[1.15] origin-center group-hover:scale-[1.25]"
    },
    {
        id: "pevensie",
        charName: "Sra. Pevensie",
        actorName: "Amanda Daniely",
        image: "https://ndigitais.shop/wp-content/uploads/2026/03/Amanda-Daniely.jpeg",
        sidebarGradient: "from-[#352528] to-[#140e0f]",
        photoBg: "from-[#23181a] to-[#070505]",
        position: "object-top"
    },
    {
        id: "lobo",
        charName: "Lobo",
        actorName: "Douglas Challub",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Lobo-Douglas-Challub.jpg",
        sidebarGradient: "from-[#24272c] to-[#0f1114]",
        photoBg: "from-[#111317] to-[#050607]",
        position: "object-top"
    },
    {
        id: "raposa",
        charName: "Raposa",
        actorName: "Naldo Nacimento",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Raposa-Naldo-Nacimento.jpg",
        sidebarGradient: "from-[#432314] to-[#1a0e08]",
        photoBg: "from-[#2d170d] to-[#0b0503]",
        position: "object-top"
    },
    {
        id: "brigitte",
        charName: "Brigitte",
        actorName: "Olivia Ribeiro",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Brigitte-Olivia-Ribeiro.jpg",
        sidebarGradient: "from-[#2d1b28] to-[#130b11]",
        photoBg: "from-[#1a1017] to-[#070406]",
        position: "object-top"
    },
    {
        id: "danca",
        charName: "Dança",
        actorName: "Grupo de Dança",
        image: "https://ndigitais.shop/wp-content/uploads/2026/06/Danca.jpg",
        sidebarGradient: "from-[#122e37] to-[#06141a]",
        photoBg: "from-[#0a1e24] to-[#02070a]",
        position: "object-center",
        scaleClass: "scale-[1.1] origin-center group-hover:scale-[1.2]"
    }
];

const charCarousel = document.getElementById('char-carousel');
if (charCarousel) {
    charactersData.forEach((char) => {
        const charDiv = document.createElement('div');
        charDiv.className = 'flex-none w-[275px] md:w-[310px] h-[410px] md:h-[450px] scroll-snap-align-center select-none';
        
        const zoomEffect = char.scaleClass || 'group-hover:scale-110';
        
        // Setup kebab-case and other name values for robust fallback checks
        const cleanActorName = char.actorName.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // removes accents
        const kebab = cleanActorName.replace(/\s+/g, '-');
        const snakeCap = cleanActorName.toUpperCase().replace(/\s+/g, '_');
        
        charDiv.innerHTML = `
            <div class="relative w-full h-full bg-[#0a0502] rounded-[1.75rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.7)] cursor-pointer border border-[#b48a4d]/20 hover:border-[#b48a4d]/40 flex transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
                <!-- Background subtle visual texture pattern on the whole card -->
                <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leather.png')] mix-blend-overlay z-10"></div>
                
                <!-- LEFT HEADER BAR WITH ROTATED CHARACTER NAME - IN PERFECT EVIDENCE -->
                <div class="w-[72px] md:w-[82px] h-full flex flex-col justify-between items-center py-6 border-r border-[#b48a4d]/20 bg-gradient-to-b ${char.sidebarGradient} relative z-20 shadow-[5px_0_15px_rgba(0,0,0,0.4)]">
                    <!-- Subtle top banner label -->
                    <span class="text-[8px] uppercase tracking-[0.25em] text-[#b48a4d] font-bold serif scale-90">NÁRNIA</span>
                    
                    <!-- Vertical Name Block - Centered and highly emphasized -->
                    <div class="h-full flex items-center justify-center py-2 overflow-hidden">
                        <span class="text-[#efe9dc] group-hover:text-white font-black text-2xl md:text-3xl tracking-[0.12em] uppercase font-sans drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] whitespace-nowrap block select-none transition-colors duration-300" style="writing-mode: vertical-rl; transform: rotate(180deg); text-orientation: mixed;">
                            ${char.charName}
                        </span>
                    </div>
                    
                    <!-- Classic Age Rating green badge from original layout, customized for Narnia -->
                    <div class="flex items-center justify-center bg-green-700 text-white font-serif font-black text-[10px] w-5 h-5 rounded-sm shadow-md border border-green-500/20">
                        L
                    </div>
                </div>

                <!-- RIGHT SIDE WITH ACTOR PHOTO AND PREMIUM STYLING -->
                <div class="flex-1 h-full relative overflow-hidden bg-[#0c0604]">
                    <!-- Colored backdrop glow matching the character's cinematic theme -->
                    <div class="absolute inset-0 bg-gradient-to-br ${char.photoBg} opacity-35 mix-blend-multiply pointer-events-none"></div>
                    
                    <!-- Actor Photo -->
                    <img src="${char.image}" alt="${char.charName} interpretado por ${char.actorName}" class="w-full h-full object-cover ${char.position} grayscale-0 contrast-[1.05] brightness-[1.02] duration-700 ease-out transition-transform ${zoomEffect}"
                        data-fallback-index="0"
                        data-kebab="${kebab}"
                        data-snake="${snakeCap}"
                        data-char="${char.charName.toLowerCase()}"
                        onerror="
                            if (!this.dataset.tried) {
                                this.dataset.tried = '1';
                                const keb = this.dataset.kebab;
                                const snk = this.dataset.snake;
                                const chr = this.dataset.char;
                                const fallbacks = [
                                    'https://ndigitais.shop/wp-content/uploads/2026/04/' + snk + '.jpg',
                                    'https://ndigitais.shop/wp-content/uploads/2026/03/' + keb + '-.jpeg',
                                    'https://ndigitais.shop/wp-content/uploads/2026/03/' + keb + '.jpeg',
                                    'https://ndigitais.shop/wp-content/uploads/2026/04/' + keb + '.jpeg',
                                    'https://ndigitais.shop/wp-content/uploads/2026/04/' + snk + '.jpeg',
                                    'https://ndigitais.shop/wp-content/uploads/2026/03/' + keb + '.png'
                                ];
                                
                                // Specific themed fallbacks if all wordpress image matches fail
                                if (chr.includes('lobo') || chr.includes('wolf')) {
                                    fallbacks.push('https://images.unsplash.com/photo-1590424753856-fdf4d5b05814?auto=format&fit=crop&w=600&q=80');
                                } else if (chr.includes('raposa') || chr.includes('fox')) {
                                    fallbacks.push('https://images.unsplash.com/photo-1474314881476-818a4adbcaf5?auto=format&fit=crop&w=600&q=80');
                                } else if (chr.includes('brigitte')) {
                                    fallbacks.push('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80');
                                } else {
                                    fallbacks.push('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80');
                                }
                                
                                let currentIdx = 0;
                                const tryNextUrl = () => {
                                    if (currentIdx < fallbacks.length) {
                                        const nextUrl = fallbacks[currentIdx++];
                                        const tempImg = new Image();
                                        tempImg.onload = () => { this.src = nextUrl; };
                                        tempImg.onerror = tryNextUrl;
                                        tempImg.src = nextUrl;
                                    }
                                };
                                tryNextUrl();
                            }
                        "
                        referrerPolicy="no-referrer" />
                    
                    <!-- Sophisticated dark gradient overlays to ensure stellar typography readability -->
                    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/35 to-transparent z-10 pointer-events-none"></div>
                    <div class="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/55 to-transparent z-10 pointer-events-none"></div>

                    <!-- Top right ambient category label -->
                    <div class="absolute top-5 right-5 opacity-40 text-[7px] uppercase tracking-[0.2em] text-[#efe9dc] font-extrabold z-20 pointer-events-none">
                        PERSONAGEM
                    </div>

                    <!-- Actor name & Production metadata at the bottom -->
                    <div class="absolute bottom-5 left-5 right-5 z-20 pointer-events-none flex flex-col justify-end">
                        <span class="text-[8px] uppercase tracking-[0.2em] text-[#b48a4d] font-black mb-0.5 leading-none">ATOR / ATRIZ</span>
                        <h4 class="text-[13px] md:text-[14px] text-white font-sans tracking-wide font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] leading-tight truncate">
                            ${char.actorName}
                        </h4>
                        
                        <!-- Premium card-footer divider with mini-logos style -->
                        <div class="w-full border-t border-white/10 mt-3 pt-2 flex items-center justify-between opacity-40 text-[7px] uppercase tracking-[0.08em] font-sans text-white">
                            <span>TEMPORADA 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        charCarousel.appendChild(charDiv);
    });

    // Carousel buttons configuration
    const prevCharBtn = document.getElementById('prev-char');
    const nextCharBtn = document.getElementById('next-char');
    if (prevCharBtn && nextCharBtn) {
        prevCharBtn.onclick = () => {
            const cardWidth = window.innerWidth < 768 ? 295 : 345;
            charCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        };
        nextCharBtn.onclick = () => {
            const cardWidth = window.innerWidth < 768 ? 295 : 345;
            charCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
        };
    }
}

// FAQ Data
const faqData = [
    {
        question: "Onde será a apresentação?",
        answer: "O espetáculo será realizado no Teatro Santo Agostinho, localizado na Rua dos Aimorés, 2679 – Lourdes, Belo Horizonte/MG."
    },
    {
        question: "Criança paga ingresso?",
        answer: "Sim, conforme a classificação etária do evento e legislação vigente de meia-entrada."
    },
    {
        question: "Posso comprar no dia?",
        answer: "Somente se houver disponibilidade. Como temos capacidade limitada, recomendamos garantir antecipadamente."
    },
    {
        question: "Por qual plataforma os ingressos são vendidos? Existe taxa?",
        answer: "Os ingressos são vendidos pela plataforma Sympla, que realiza a cobrança de uma taxa de serviço no momento da compra."
    }
];

const faqContainer = document.getElementById('faq-container');
if (faqContainer) {
    faqData.forEach((item) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'border border-white/5 rounded-lg overflow-hidden bg-white/[0.02] transition-all duration-300';
        faqItem.innerHTML = `
            <button class="w-full p-6 text-left flex justify-between items-center group hover:bg-white/[0.03] transition-colors" aria-expanded="false">
                <h3 class="text-lg italic text-[#8E7B5B] serif group-hover:text-[#b48a4d] transition-colors">${item.question}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8E7B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-in-out bg-white/[0.01]">
                <div class="p-6 pt-0 text-sm text-[#D6D6D2]/70 font-light leading-relaxed border-t border-white/5 mt-2">
                    ${item.answer}
                </div>
            </div>
        `;

        const button = faqItem.querySelector('button');
        const answer = faqItem.querySelector('.faq-answer') as HTMLElement;
        const icon = faqItem.querySelector('svg');

        button?.addEventListener('click', () => {
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            
            // Close all other items (optional, but cleaner)
            document.querySelectorAll('#faq-container button').forEach(btn => {
                if (btn !== button) {
                    btn.setAttribute('aria-expanded', 'false');
                    const otherAnswer = btn.nextElementSibling as HTMLElement;
                    if (otherAnswer) otherAnswer.style.maxHeight = '0';
                    btn.querySelector('svg')?.classList.remove('rotate-180');
                }
            });

            // Toggle current item
            button.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon?.classList.add('rotate-180');
            } else {
                answer.style.maxHeight = '0';
                icon?.classList.remove('rotate-180');
            }
        });

        faqContainer.appendChild(faqItem);
    });
}
