// Content for the individual service pages (Plumbing, HVAC, AC Conditioning).
// Each entry drives one route (/plumbing, /hvac, /ac) rendered by ServicePage.
// Icon keys map to inline SVGs defined in ServicePage so this data stays plain.

export const SERVICE_PAGES = {
  plumbing: {
    slug: 'plumbing',
    eyebrow: 'Plumbing Services',
    name: 'Plumbing',
    iconSrc: '/Group 8.svg',
    heroImage: '/Pot Filler Faucet Install in Ogden.jpeg',
    heroImageAlt: 'Pot filler faucet installation in Ogden — real job photo',
    introTitle: 'Professional Plumbing Solutions To Keep Your Home Running Smoothly',
    introText:
      "From a dripping faucet to a full repipe, our licensed plumbers handle it all with clean, code-compliant workmanship. We diagnose the real problem, fix it right the first time, and protect your Northern Utah home from costly water damage — available 7 days a week.",
    servicesHeading: 'Our Expert Plumbing Services',
    servicesIntro:
      'Whatever the issue, the same craftsmanship and honest pricing. Here are the plumbing services our team handles every day.',
    services: [
      { title: 'Drain Cleaning', icon: 'pipe', description: 'Clogged or slow drains cleared fast, then cleaned to keep them flowing — no harsh chemicals.' },
      { title: 'Drain Clearing', icon: 'snake', description: 'Stubborn blockages broken up with professional augers and hydro-jetting for a lasting fix.' },
      { title: 'Water Heater', icon: 'thermometer', description: 'Repair, maintenance, and installation for tank and tankless units, with reliable hot water guaranteed.' },
      { title: 'Leak Detection & Repair', icon: 'droplet', description: 'Hidden leaks pinpointed without tearing up your home, then repaired before damage spreads.' },
      { title: 'Sump Pump', icon: 'pump', description: 'Sump pump installs, swaps, and tune-ups that keep basements and crawlspaces dry through every storm.' },
      { title: 'Sewer Services', icon: 'sewer', description: 'Camera inspections, cleaning, and trenchless repair to keep your main line clear and protected.' },
      { title: 'Water Line Replacement', icon: 'pipe', description: 'Corroded or leaking supply lines replaced with durable modern piping built to last decades.' },
      { title: 'Faucet Replacement', icon: 'faucet', description: 'New faucets installed cleanly — better flow, no drips, and a finish that matches your space.' },
      { title: 'Water Quality Filters', icon: 'filter', description: 'Whole-home filtration and softeners for cleaner, better-tasting water and longer-lasting fixtures.' },
      { title: 'Toilet Repair or Replacement', icon: 'toilet', description: 'Running, leaking, or worn-out toilets repaired or replaced with efficient, water-saving models.' },
      { title: 'Emergency Services', icon: 'alarm', description: "Burst pipe or overflow? We're on call after hours for fast, same-day emergency response." },
      { title: 'Garbage Disposal', icon: 'disposal', description: 'Jammed or dead disposals repaired or replaced so your kitchen sink runs smoothly again.' },
    ],
    warningTitle: 'How To Know When Your Plumbing System Needs Attention',
    warnings: [
      { title: 'Slow Drains', text: 'Water pooling in sinks or tubs is an early sign of a building clog worth clearing now.' },
      { title: 'Low Water Pressure', text: 'A sudden drop can point to a hidden leak, buildup, or a failing line in the system.' },
      { title: 'Water Stains', text: 'Discoloration on walls, ceilings, or floors usually means water is escaping where it should not.' },
      { title: 'High Water Bills', text: 'An unexplained spike often traces back to a silent leak running around the clock.' },
    ],
  },

  hvac: {
    slug: 'hvac',
    eyebrow: 'Heating Services',
    name: 'HVAC',
    iconSrc: '/Group 9.svg',
    heroImage: '/Heating furnace.jpg',
    heroImageAlt: 'Furnace heating system installation — real job photo',
    introTitle: 'Reliable Heating Built For Northern Utah Winters',
    introText:
      "When the temperature drops, your heating system can't afford to fail. We service, repair, and install furnaces, boilers, heat pumps, and mini-splits — keeping your home warm, your air clean, and your energy bills in check all season long.",
    servicesHeading: 'Our Expert Heating Services',
    servicesIntro:
      'From a no-heat emergency to a high-efficiency upgrade, our certified technicians keep your home comfortable through the coldest months.',
    services: [
      { title: 'Furnace Repair', icon: 'flame', description: 'No-heat calls diagnosed and fixed fast, with honest answers on whether to repair or replace.' },
      { title: 'Furnace Installation', icon: 'flame', description: 'Right-sized, high-efficiency furnace installs that lower bills and heat every room evenly.' },
      { title: 'Boiler Service', icon: 'boiler', description: 'Boiler maintenance, repair, and replacement for steady, comfortable radiant and baseboard heat.' },
      { title: 'Heat Pumps', icon: 'heatpump', description: 'Efficient heat pump systems that heat in winter and cool in summer from a single unit.' },
      { title: 'Ductless Mini-Splits', icon: 'minisplit', description: 'Zoned mini-split comfort for additions, basements, and rooms your ductwork never reached.' },
      { title: 'Thermostats', icon: 'thermostat', description: 'Smart and programmable thermostat upgrades for precise control and real energy savings.' },
      { title: 'Air Handlers', icon: 'airflow', description: 'Air handler service and installation for quiet, consistent airflow throughout your home.' },
      { title: 'Heating Maintenance', icon: 'wrench', description: 'Seasonal tune-ups that catch small problems early and keep your system running safely.' },
      { title: 'Indoor Air Quality', icon: 'filter', description: 'Filtration, humidifiers, and fresh-air solutions for healthier, cleaner indoor air.' },
      { title: 'Emergency Heating', icon: 'alarm', description: "Lost heat overnight? We're on call for fast, same-day emergency heating repair." },
    ],
    warningTitle: 'Signs Your Heating System Needs Service',
    warnings: [
      { title: 'Uneven Heating', text: 'Cold rooms while others bake usually means airflow, ducting, or a failing component.' },
      { title: 'Rising Energy Bills', text: 'A climbing gas or power bill with no change in habits points to a system losing efficiency.' },
      { title: 'Strange Noises', text: 'Banging, rattling, or whistling from the furnace is a warning to get it checked early.' },
      { title: 'Short Cycling', text: 'A system that turns on and off constantly is stressed and headed for a breakdown.' },
    ],
  },

  ac: {
    slug: 'ac',
    eyebrow: 'Cooling Services',
    name: 'AC Conditioning',
    iconSrc: '/Group 10.svg',
    heroImage: '/AC installed 01.jpg',
    heroImageAlt: 'Air conditioning unit installation — real job photo',
    introTitle: 'Cool, Comfortable Air When You Need It Most',
    introText:
      "Utah summers get hot fast. Whether your AC needs a tune-up, a repair, or a full replacement, our certified technicians deliver reliable cooling that keeps your home comfortable and your energy costs down — with same-day service available.",
    servicesHeading: 'Our Expert Cooling Services',
    servicesIntro:
      'From routine tune-ups to brand-new high-efficiency systems, we keep your home cool and your air clean all summer long.',
    services: [
      { title: 'AC Repair', icon: 'wrench', description: 'Warm air or a unit that won’t start, diagnosed and repaired fast so comfort returns quickly.' },
      { title: 'AC Installation', icon: 'snowflake', description: 'Right-sized, high-efficiency AC installs that cool evenly and cut your summer energy bills.' },
      { title: 'AC Tune-Ups', icon: 'wrench', description: 'Seasonal maintenance that boosts efficiency, prevents breakdowns, and extends system life.' },
      { title: 'Heat Pumps', icon: 'heatpump', description: 'Year-round comfort from a single efficient system that both cools and heats your home.' },
      { title: 'Ductless Mini-Splits', icon: 'minisplit', description: 'Zoned cooling for rooms, additions, and spaces without ductwork — quiet and efficient.' },
      { title: 'Indoor Air Quality', icon: 'filter', description: 'Filtration and air purification that keep your cool air clean and easy to breathe.' },
      { title: 'Thermostats', icon: 'thermostat', description: 'Smart thermostat upgrades for precise cooling control and lower energy use.' },
      { title: 'Refrigerant Service', icon: 'droplet', description: 'Leak checks and proper refrigerant charging so your system cools at full capacity.' },
      { title: 'Coil Cleaning', icon: 'snowflake', description: 'Evaporator and condenser coil cleaning to restore efficiency and airflow.' },
      { title: 'Emergency Cooling', icon: 'alarm', description: "AC out on the hottest day? We're on call for fast, same-day emergency cooling repair." },
    ],
    warningTitle: 'Signs Your AC Needs Attention',
    warnings: [
      { title: 'Warm Air', text: 'Air that isn’t cold often means low refrigerant, a dirty coil, or a failing compressor.' },
      { title: 'Weak Airflow', text: 'Little air from the vents points to a clogged filter, duct issue, or blower problem.' },
      { title: 'Rising Energy Bills', text: 'A spike in summer cooling costs usually means the system is working harder than it should.' },
      { title: 'Strange Smells', text: 'Musty or burning odors when the AC runs are a sign to get it inspected right away.' },
    ],
  },
}

export const SERVICE_SLUGS = Object.keys(SERVICE_PAGES)
