class TestExtension {
  getInfo() {
    return {
      id: 'test-extension',
      name: 'Test Extension',
      blocks: [
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi'
        }
      ]
    };
  }
  
  pi() {
    return Math.PI;
  }
}

Scratch.extensions.register(new TestExtension());
