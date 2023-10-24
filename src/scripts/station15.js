async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    {
      id: 1,
      first_name: "優",
      family_name: "大木",
      affiliation: "TechTrain",
      is_student: false,
    },
    {
      id: 2,
      first_name: "太郎",
      family_name: "山田",
      affiliation: "HogeHoge大学",
      is_student: true,
    },
  ];
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(test(userList));
    }, 3000);
  });

  return await result;
}

function test(userList) {
  return userList.map(buildFullName);
}

function buildFullName(data) {
  const tmp = data.family_name + " " + data.first_name;
  data.full_name = tmp;
  return data;
}
