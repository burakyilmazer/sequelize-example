# Sequelize node.js postgresql örneği

### Proje kurulumu
```sh
$ npm init
$ npm install express sequelize sequelize-cli body-parser pg pg-hstore cors dotenv nodemon
```

Paketler yüklendikten sonra .sequelizerc dosyasını oluşturun ve içerisine örnekteki gibi yolları belirleyin. Bu işlemden sonra aşağıdaki komutu çalıştırın. Belirttiğiniz yollarda dosyalarınız oluşturulacaktır.  

```
$ sequelize init
```

Config klasörü içerisine oluşturulan config.json dosyasını kendi veritabanınıza göre düzeltin. 
.babelrc dosyası oluşturup içerisini örnekteki gibi düzenleyin.
package.json dosyasında script alanına aşağıdaki satırı ekleyin.
```
"start": "nodemon --exec babel-node index.js"
```

Veritabanına user isimli içerisinde name username mail password bilgilerinin tutulduğu bir tablo oluşturmak için aşağıdaki komutu çalıştırın.

```
sequelize model:create --name User --attributes name:string,username:string,email:string,password:string
```

Oluşturduğumuz tabloyu migrate ederek kullanıma almamız gerekiyor. Bu yüzden aşağıdaki komutu çalıştırın.

```
sequelize db:migrate
```
Artık veritabanımız ve tablomuz hazır routelarınızı oluşturup crud işlemlerinizi gerçekleştirebilirsiniz. 