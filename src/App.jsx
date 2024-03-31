import React from 'react';

import './reset.css';
import './App.css';

import Header from './Header';

const LOREM = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Iaculis eu non diam phasellus vestibulum lorem sed risus.
  Donec pretium vulputate sapien nec sagittis aliquam malesuada.
  Mauris in aliquam sem fringilla ut morbi tincidunt.
  In mollis nunc sed id semper risus in hendrerit.
  Dui nunc mattis enim ut tellus elementum sagittis vitae et.
  In eu mi bibendum neque egestas congue quisque egestas diam.
  Vitae tortor condimentum lacinia quis vel eros donec ac.
  Accumsan sit amet nulla facilisi morbi.
  Eget mauris pharetra et ultrices neque ornare aenean euismod.
  Semper auctor neque vitae tempus quam pellentesque nec.
  Odio tempor orci dapibus ultrices in.
  Ut venenatis tellus in metus vulputate eu scelerisque.
  Cursus metus aliquam eleifend mi in.
  Gravida dictum fusce ut placerat.
  Interdum posuere lorem ipsum dolor sit.`,
  `Hac habitasse platea dictumst vestibulum rhoncus est.
  Auctor neque vitae tempus quam.
  Sapien pellentesque habitant morbi tristique senectus et netus et.
  Augue neque gravida in fermentum.
  Tellus in hac habitasse platea dictumst vestibulum rhoncus.
  Nulla aliquet enim tortor at auctor urna.
  Felis donec et odio pellentesque diam volutpat.
  Arcu ac tortor dignissim convallis aenean et.
  Erat imperdiet sed euismod nisi.
  Pharetra diam sit amet nisl suscipit.
  Massa ultricies mi quis hendrerit dolor magna.
  Bibendum ut tristique et egestas quis ipsum suspendisse.
  Sed augue lacus viverra vitae congue eu.
  Sed odio morbi quis commodo odio.
  Ut tortor pretium viverra suspendisse potenti nullam.
  Turpis egestas sed tempus urna et pharetra.
  Ac tortor dignissim convallis aenean et.
  Aliquam vestibulum morbi blandit cursus risus at ultrices.`,
  `Adipiscing elit ut aliquam purus sit.
  Aliquam vestibulum morbi blandit cursus risus.
  Scelerisque viverra mauris in aliquam sem.
  Tincidunt praesent semper feugiat nibh.
  Leo integer malesuada nunc vel risus commodo viverra maecenas.
  Dolor sed viverra ipsum nunc aliquet bibendum enim.
  Dictum sit amet justo donec enim diam.
  Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae.
  Amet luctus venenatis lectus magna fringilla.
  Ullamcorper sit amet risus nullam.
  Volutpat consequat mauris nunc congue nisi vitae suscipit.
  Ut consequat semper viverra nam.
  Cursus metus aliquam eleifend mi in.
  Non enim praesent elementum facilisis leo vel fringilla.
  Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.
  Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin.
  Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.`,
  `Et malesuada fames ac turpis.
  Adipiscing elit duis tristique sollicitudin.
  Faucibus vitae aliquet nec ullamcorper sit amet risus.
  Sem fringilla ut morbi tincidunt augue interdum velit.
  Proin libero nunc consequat interdum.
  Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.
  Nascetur ridiculus mus mauris vitae ultricies leo integer.
  Pellentesque sit amet porttitor eget.
  Felis bibendum ut tristique et egestas quis.
  Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu.
  Amet venenatis urna cursus eget nunc.
  Et malesuada fames ac turpis egestas integer eget aliquet.
  Eget nullam non nisi est sit.
  Quis enim lobortis scelerisque fermentum.
  Non blandit massa enim nec dui.
  A arcu cursus vitae congue mauris rhoncus.
  Dignissim enim sit amet venenatis urna cursus.
  Nunc pulvinar sapien et ligula ullamcorper malesuada.`,
  `Malesuada fames ac turpis egestas maecenas pharetra convallis posuere.
  Augue lacus viverra vitae congue eu consequat ac.
  Vulputate odio ut enim blandit volutpat.
  Pretium fusce id velit ut tortor pretium viverra.
  Malesuada fames ac turpis egestas integer eget.
  Euismod lacinia at quis risus sed vulputate.
  In nulla posuere sollicitudin aliquam.
  Dictum at tempor commodo ullamcorper a lacus vestibulum sed.
  Faucibus et molestie ac feugiat sed.
  Phasellus vestibulum lorem sed risus ultricies tristique nulla.
  Egestas integer eget aliquet nibh.
  Pulvinar elementum integer enim neque volutpat ac tincidunt.`,
];

function App() {
  return (
    <>
      <Header />
      <main>{LOREM.map((chunk) => <p key={chunk}>{chunk}</p>)}</main>
      <footer>
        <div>
          Footer
        </div>
      </footer>
    </>
  );
}

export default App;
