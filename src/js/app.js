export default function foo(data) {
  let status = 'null';
  if (data.health > 50) {
    status = 'healthy';
  } else if (data.health <= 50 && data.health >= 15) {
    status = 'wounded';
  } else {
    status = 'critical';
  }
  return status;
}
