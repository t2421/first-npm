export function defineLib1() {
  const global = window as any;
  global.lib1 = {
    func1: () => {
      alert("lib1 defined");
    },
  };
}
