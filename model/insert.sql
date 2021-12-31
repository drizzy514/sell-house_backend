INSERT INTO banks(
 bank_name,
 bank_info,
 bank_img,
 bank_max   
)VALUES
('Xalq banki', 'lorem ipsum dolor sit amet XALQ BANKI', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxwONG2VgbfugYIYj8PRCqgUYXsNLd6mYCg&usqp=CAU', '500000000'),
('Orient Finance Bank', 'lorem ipsum dolro sit amet Orient Finnance Bank', 'https://bank.uz/upload/iblock/8c3/8c36768335cd3104018d07507c160388.jpg', '300000000'),
('Ipoteka Banki', 'lorem ipsum dolor sit amet IPoteka Bank', 'https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/64/5f/49/645f49d5-c989-0a60-c8a8-edc78b78c25a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png', '200000000');

INSERT INTO developers (
        developer_title,
        developer_email,
        developer_site,
        developer_img
)VALUES ('Taqachi City', 'taqachi@gmail.com', 'https://taqachi.uz', 'https://apollo-olx.cdnvideo.ru/v1/files/9y2ym14qt66j3-UZ/image;s=644x461'),
        ('Novza Street', 'novza@gmail.com', 'https://novzastreet.uz', 'https://domtut.uz/wp-content/uploads/2019/10/online-cover.-novza.jpg'),
        ('Darkhan Avenue', 'darkhan@gmail.com', 'https://darkhan.uz', 'http://darkhan-avenue.uz/images/tild6337-3431-4132-b135-643733623437__012.jpg'),
        ('Greenwich', 'greenwich@gmail.com', 'https://greenwich.uz', 'https://gh.uz/wp-content/uploads/greenwich-4.jpg')

INSERT INTO complexs (
    complex_title,
    complex_developer
)VALUES('Olmazor tumani', 1),
        ('Uch Tepa tumani', 2),
        ('Shoyxontohur tumani', 3),
        ('Chilonzor tumani', 4);

INSERT INTO houses(
    house_room,
    house_price,
    house_complex
)VALUES (4, 250000000, 1),
        (2, 190000000, 2),
        (3, 200000000, 3),
        (1, 150000000, 4);