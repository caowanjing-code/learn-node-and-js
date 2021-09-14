// const buf=Buffer.from('runoob','ascii');//ascii仅仅支持7位数的ASCII数据

// console.log(buf.toString('hex'));//将每个字节编码为2个16进制的字符；
// console.log(buf.toString('utf-8'));
// console.log(buf.toString('base64'));



// buf=Buffer.alloc(256);
// len=buf.write("www.run.com");

// console.log
// ("写入字节数为："+len);


buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
console.log( buf.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde