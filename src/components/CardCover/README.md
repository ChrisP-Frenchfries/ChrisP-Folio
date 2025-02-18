# fonctionnement du composant

Ce composant fonctionne de la manière suivante :

Le composant CardImageHoverEffect prend quatre props :

children : le contenu de la Card X
targetClassName : la classe de la Card Y
imageUrl : l'URL de l'image à afficher
className : classe optionnelle pour le wrapper
L'image est placée dans la Card Y mais est cachée par défaut (opacity: 0)

Lorsque la Card X est survolée, l'image dans la Card Y devient visible (opacity: 1)

L'image est positionnée en absolute dans la Card Y et couvre tout son espace


```tsx
import CardImageHoverEffect from './CardImageHoverEffect';

const Example = () => {
  return (
    <div className="container">
      {/* Removed unnecessary card-x div */}
      <CardImageHoverEffect 
        targetClassName="card-y"
        imageUrl="/path/to/your/image.jpg"
      >
        <h3>Card X</h3>
        <p>Hover me to see image in Card Y</p>
      </CardImageHoverEffect>

      <div className="card-y">
        <h3>Card Y</h3>
        <p>Original content</p>
      </div>
    </div>
  );
};

export default Example;

```


