export function defineLib2() {
  const global = window as any;
  global.lib2 = {
    func1: () => {
      alert("lib2 defined");
    },
  };
}
