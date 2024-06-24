import img1 from '../img/Colt_Detective_Special.jpg';
import img2 from '../img/800px-NickelPlatedM1911A1.jpg';
import img3 from '../img/DetroitPDrevolver.jpg';
import img4 from '../img/SWModel28.jpg';
import img5 from '../img/M1928.jpg';
import img6 from '../img/Remington_SBS.jpg';
import img7 from '../img/Winchester97field.jpg';
import img8 from '../img/M1903Mark1.jpg';
import img9 from '../img/MosinNagantM9130Sniper.jpg';
import img10 from '../img/MK2_grenade_DoD.jpg';

export const weaponsList = [
    {
        title: 'Colt Detective Special - .38 Special',
        description:
            'The .38 caliber Colt Detective Special snubnose revolver is the weakest firearm in the game.',
        additionalInfo:
            'It has very limited range and stopping power. Usually carried by detectives, but they are also occasionally carried by police officers, gangsters, and several civilians as a backup weapon. In the later missions of the game, Tommy himself carries one as a backup weapon, but with no additional ammo for it. The Colt DS (and other revolvers in the game) is reloaded round-by-round rather quickly by in-game characters, which is surprising given that none of them are seen to use speedloaders or similar devices to reload this weapon.',
        img: img1,
    },
    {
        title: 'Colt M1911A1',
        description:
            'The sole semi-automatic pistol in the game is the .45 caliber Colt M1911A1.',
        additionalInfo:
            " It has good stopping power and a high rate of fire. Very effective at close range. The pistol's working is well animated for the early 2000s third-person game, in particular with a working slide, stand on the slide latch when the magazine is empty (even though his tactical reload animation involves racking the slide every time, which would eject a still-chambered round). The pistol appears with a nickel finish and black grips (even though a non-nickel M1911 would have been more correct for someone to carry as ordinary combat gun).",
        img: img2,
    },
    {
        title: 'Smith & Wesson Model 10',
        description:
            'The .38 caliber Smith & Wesson Model 10 Military & Police is the weapon of choice of the Lost Heaven police department, but it is also carried by various gangsters and is given to the player in a couple of missions.',
        additionalInfo:
            'Like the M1911A1, it appears in the game with a nickel finish and black target grips.',
        img: img3,
    },
    {
        title: 'Smith & Wesson Model 27',
        description:
            'The most powerful pistol in the game is the .357 Magnum Smith & Wesson Model 27',
        additionalInfo: `It is used by some enemy gangsters. It is also used quite prominently as a sidearm by Paulie (in the mission "Great Deal"), and Don Salieri (in "Bon Appetit"). Paulie's use of it in "Great Deal" is anachronistic, because the mission takes place in 1933, even though the Model 27 was first manufactured in 1935. The gun is also used in earlier missions, which take place in 1930 to 1935, making its use at least 5 years prior to is production`,
        img: img4,
    },
    {
        title: 'Thompson M1928',
        description:
            'The Thompson M1928, infamous for its popularity with mobsters, is the only automatic weapon in the game and is used by all sides.',
        additionalInfo: ``,
        img: img5,
    },
    {
        title: 'Double-Barreled Side-By-Side Sawed-off Shotgun',
        description:
            'A sawed-off shotgun of unknown manufacture, with the barrels and stock removed and using a break-open action.',
        additionalInfo: `Often referred to as a "Lupara" (its traditional Italian name), it is occasionally issued to Tommy by Vincenzo, Salieri's armorer, for assassinations or executions (Vincenzo refers to its use as "the traditional Sicilian way"). Such missions include the "Omertà" and "Crème de la crème" levels. The weapon is also used by enemy gangsters, especially those riding in black cars in Free Ride mode.`,
        img: img6,
    },
    {
        title: 'Winchester Model 1897',
        description:
            'The pump-action 12-gauge Winchester Model 1897 shotgun is a very dependable full-sized shotgun.',
        additionalInfo: `Used by the police, both Mafia families, and various thugs the player encounters. Its ability to reload at any time without having to lose ammo (thanks to its tubular magazine) is also very helpful. Also, the shotgun in-game holds 8 rounds, instead the correct 5+1.`,
        img: img7,
    },
    {
        title: 'Springfield M1903 Mk 1',
        description:
            'The .30-06 M1903 Springfield is used by various enemies, and is far more common than the Mosin-Nagant.',
        additionalInfo: `Its 5-round magazine is always reloaded with (invisible) stripper clips, and for some reason, triggering a reload will make any rounds left in the magazine disappear, as if Tommy is detaching and replacing a magazine like the other weapons.`,
        img: img8,
    },

    {
        title: 'Mosin-Nagant M1891/30',
        description:
            'A Mosin-Nagant M1891/30 with an anachronistic PU sniper scope is issued to the player in one mission to be used for a long-distance assassination.',
        additionalInfo: ` In-game, it is confusingly described as both locally produced (a large amount of original M91 rifles were indeed produced in America for the Russian Empire during World War I) and "the new Russian marksman rifle" (the in-game model is the second major production model); and the need to use this is not completely clear. It uses the same reload system as the M1903 Springfield, with invisible stripper clips (although the scope would not allow them to be used) and the mysterious disappearance of remaining rounds.`,
        img: img9,
    },
    {
        title: 'Mk 2 Hand Grenade',
        description:
            'The Mk 2 hand grenade is the frag grenade used in the game.',
        additionalInfo: `They are usable only in the missions "Great Deal" and "You Lucky Bastard". It is also used by enemy gangsters in "The Death of Art" about half way through the mission.`,
        img: img10,
    },
];
