import '../styles.css';
import { appendTo } from './helper';
import { weaponsList } from './weaponsList';
import { idGenerator } from './idGenerator';

const weapons_id = 'WEAPONS_ID';

const createWeaponElement = ({ title, description, additionalInfo, img }) => {
    const el = document.createElement('article');
    el.className = 'weaponElement';

    const showMoreBtnId = idGenerator.gen();
    el.innerHTML = `
      <h1>${title}</h1>
      <p>${description}</p>
      <img src=${img} />
      <button id=${showMoreBtnId}>Show More</button>
      `;

    const button = el.querySelector(`#${showMoreBtnId}`);

    button.onclick = () => {
        appendTo(
            el,
            showModalInfo({
                title,
                description,
                additionalInfo,
                img,
                id: showMoreBtnId,
            }).element
        );
    };

    return {
        get element() {
            return el;
        },
    };
};

export const bootstrapComponents = () => {
    const weaponListComponent = document.createElement('div');
    weaponListComponent.id = weapons_id;
    weaponListComponent.className = 'weapons-list';
    weaponsList.forEach((i) => {
        const weaponElement = createWeaponElement({ ...i });
        appendTo(weaponListComponent, weaponElement.element);
    });

    appendTo(document.body, weaponListComponent);
};

bootstrapComponents();

const showModalInfo = ({ title, description, additionalInfo, img, id }) => {
    const closeId = `modal${id}`;

    const modalBackground = document.createElement('div');
    modalBackground.className = 'modalBackground';

    const el = document.createElement('div');
    el.className = '';
    el.innerHTML = `
    <div class="modalWrapper">
    <article class="modalContent">
      <h1>${title}</h1>
      <p>${description}</p>
      <p>${additionalInfo}</p>
      <img src=${img} />
      <button id=${closeId}>Close</button>
      </article>
      </div>
      `;
    appendTo(el, modalBackground);

    const button = el.querySelector(`#${closeId}`);

    button.onclick = () => {
        modalBackground.remove();
        el.remove();
    };

    return {
        get element() {
            return el;
        },
    };
};
