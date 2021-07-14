## Dữ liệu thời khóa biểu trường ĐẠI HỌC CẦN THƠ

<img src="https://upload.wikimedia.org/wikipedia/vi/thumb/6/6c/Logo_Dai_hoc_Can_Tho.svg/1024px-Logo_Dai_hoc_Can_Tho.svg.png" width="100px"/>

## API LẤY THÔNG TIN CƠ BẢN

### Request:

```
https://minhthangdev-server.herokuapp.com/api/courses/search/
```

#### Tham số:

- Params: "Tên hoặc mã học phần."

##### VD:

https://minhthangdev-server.herokuapp.com/api/courses/search/K

### Response:

```
[
  {
    "name": "Kỹ năng học đại học",
    "key": "CT100"
  },
  //..........
]
```

## API LẤY TOÀN BỘ THÔNG TIN CỦA LỚP HỌC PHẦN

### Request:

```
https://minhthangdev-server.herokuapp.com/api/courses/key/
```

#### Tham số:

- Params: "Mã học phần chính xác!"
- Query: y="năm học", n="học kì"

##### VD:

https://minhthangdev-server.herokuapp.com/api/courses/key/CT100?y=20212022&n=1

### Response:

```
[
  {
    "key": "CT100",
    "id": "01",
    "teacher": "",
    "class": "CT10001",
    "member": "80",
    "name": "Kỹ năng học đại học",
    "weight": "2",
    "week": "123456789012345*****",
    "time": [
      {
        "day": "6",
        "start": "6",
        "count": "2",
        "room": "206/KH"
      },
      //..........
    ]
  },
  //..........
]
```
