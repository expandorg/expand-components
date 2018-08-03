import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';

import 'prismjs/themes/prism.css';

export default function highlight(node) {
  const blocks = node.querySelectorAll('pre code');
  if (blocks) {
    blocks.forEach(block => {
      Prism.highlightElement(block);
    });
  }
}
