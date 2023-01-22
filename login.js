function solution(id_pw, db) {
  const id_idx = db.findIndex((el) => el.includes(id_pw[0]));

  if (id_idx === -1) {
    return 'fail';
  } else if (db[id_idx][1] !== id_pw[1]) {
    return 'wrong pw';
  }
  return 'login';
}
