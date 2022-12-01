import challenge from "../images/Trực tiếp/Challenge.png";
import diary from "../images/Trực tiếp/Nhật ký.png";
import poster from "../images/Trực tiếp/Poster.png";
import soTinhHuong from "../images/Trực tiếp/Sổ tình huống.png";
import theCamXuc from "../images/Trực tiếp/Thẻ cảm xúc.png";
import troChoiTinhHuong from "../images/Trực tiếp/Trò chơi tình huống.png";
import moRong from "../images/Trực tiếp/MR.png"; 
import tieuChuan from "../images/Trực tiếp/TC.png"; 

export const comboData = [
    {
        _id: "1",
        img: tieuChuan,
        title: "Bộ tiêu chuẩn",
        price: "210,000 VND", 
        description: "Dành cho 50 người đặt hàng đầu tiên", 
        tags: ["Nhiệm vụ hàng ngày" , "Thẻ cảm xúc", "Trò chơi tình huống"]
    },
    {
        _id: "2",
        img: moRong,
        title: "Bộ mở rộng",
        price: "330,000 VND", 
        description: "Dành cho 50 người đặt hàng đầu tiên", 
        tags: ["Nhiệm vụ hàng ngày" , "Nhật ký", "Sổ hướng dẫn", "Sổ tình huống", "Thẻ cảm xúc", "Trò chơi tình huống"]
    },
]

export const toolkitData = [
    {
        _id: "1",
        img: challenge,
        title: "Nhiệm vụ hàng ngày",
        description: "Bao gồm hai bộ thẻ, dành cho con và dành cho cha mẹ. In trên mỗi tấm thẻ là các hoạt động mà cha mẹ và con có thể thực hiện hàng ngày nhằm thấu hiểu và gắn kết với nhau hơn. Mặt sau của thẻ có phần giải thích dựa trên khoa học thực nghiệm giúp cha mẹ hiểu thêm các kiến thức về giáo dục trẻ em.", 
        tags: ["CLARITY" , "CONFIDENCE", "CONNECTION"]
    },
    {
        _id: "2",
        img: diary,
        title: "Nhật ký",
        description: "Cha mẹ sẽ dành thời gian viết những câu chuyện đồng hành cùng con (có thể đính kèm hình ảnh,...), đánh dấu sự phát triển của con về cả thể chất và tinh thần. Bênh trong quyển số sẽ bao gồm các mục gợi ý, hướng dẫn tích hợp các mục tiêu khoa học để hành trình của cha mẹ có thể được ghi chép một cách hiệu quả nhất.", 
        tags: ["CLARITY" , "CONFIDENCE", "CONNECTION"]
    }, 
    {
        _id: "3",
        img: poster,
        title: "Sổ hướng dẫn",
        description: "Các hướng dẫn tổng quan về những điều cần tránh, những điều nên làm và những kỹ năng trẻ nên được học dựa vào các giai đoạn phát triển của đứa trẻ", 
        tags: ["CLARITY" , "CONFIDENCE", "CONNECTION"]
    },
    {
        _id: "4",
        img: soTinhHuong,
        title: "Sổ tình huống",
        description: "Quyển sổ với những cách tiếp cận trực tiếp, đơn giản, giúp cha mẹ có thể có một phản ứng phù hợp và hiệu quả với những tình huống khó xử thưởng gặp.", 
        tags: ["CLARITY" , "CONFIDENCE", "CONNECTION"]
    },
    {
        _id: "5",
        img: theCamXuc,
        title: "Thẻ cảm xúc",
        description: "Những tấm thẻ cảm xúc dùng để ghi lại những sự vật, sự việc khơi gợi cảm xúc cho con: hạnh phúc, sợ hãi, nhàm chán, buồn bã,... theo phương pháp kể chuyện. Người ghi lên thẻ có thể là con hoặc cha mẹ tùy vào trường hợp của từng gia đình", 
        tags: ["CLARITY" , "CONFIDENCE", "CONNECTION"]
    },
    {
        _id: "6",
        img: troChoiTinhHuong,
        title: "Trò chơi tình huống",
        description: "Trò chơi giúp cha mẹ tìm hiểu những phản ứng của con trước những tình huống nhất định, từ đó điều chỉnh hành vi của con một cách tâm lý, dễ tiếp cận", 
        tags: ["CLARITY" , "CONFIDENCE", "CONNECTION"]
    }
];