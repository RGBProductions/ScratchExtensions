alert("Test extension attempt to load");

class TestExtension {
  getInfo() {
    try {
      return {
        id: 'test-extension',
        name: 'Test Extension',
        blocks: [
          {
            opcode: 'pi',
            blockType: Scratch.BlockType.REPORTER,
            text: 'π'
          }
        ]
      };
    } catch(e) {
      alert(`Test extension failed to load: ${e}`);
    }
  }
  
  pi() {
    return Math.PI;
  }
}

Scratch.extensions.register(new TestExtension());
