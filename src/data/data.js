// import challenge from "../images/Trực tiếp/Challenge.png";
import diary from "../images/Trực tiếp/Nhật ký.png";
import poster from "../images/Trực tiếp/Poster.png";
import soTinhHuong from "../images/Trực tiếp/Sổ tình huống.png";
import theCamXuc from "../images/Trực tiếp/Tcx.png";
import troChoiTinhHuong from "../images/Trực tiếp/Tcth.png";
import moRong from "../images/Trực tiếp/MR.png";
import tieuChuan from "../images/Trực tiếp/TC.png";
import nhiemVuHangNgay from "../images/Trực tiếp/Nvhn.png";

import t1 from "../images/theTinhHuong/1_Front.png";
import t2 from "../images/theTinhHuong/2_Front.png"; 
import t3 from "../images/theTinhHuong/3_Front.png";
import t4 from "../images/theTinhHuong/4_Front.png"; 
import t5 from "../images/theTinhHuong/5_Front.png";
import t6 from "../images/theTinhHuong/6_Front.png"; 
import t7 from "../images/theTinhHuong/7_Front.png";
import t8 from "../images/theTinhHuong/8_Front.png"; 

export const productsData = [
    {
        _id: "6",
        products: [
            {
                img: t1, 
                description: "Hôm nay vịt phải ở nhà một mình vì cha mẹ bận đi làm. Vịt con đang ngồi xem TV thì bỗng dưng có tiếng gõ cửa và một giọng nói xa lạ vang lên \"Cháu ơi cho chú vào nhà với\". Con sẽ làm gì nếu con là vịt?"
            },
            {
                img: t2, 
                description: "Hôm nay chuột con Sún được đi chợ với mẹ. Sún vì mãi ngắm nhìn những chú cá vàng trưng bày ở một cửa hàng ven đường mà lạc mất mẹ của mình. Con sẽ làm gì nếu con là bạn Sún?"
            }, 
            {
                img: t3, 
                description: "Hôm nay vì mãi chơi cờ cá ngựa với Đậu Đậu nên Bo chưa làm bài tập cô giáo giao. Hôm nay, cô giáo yêu cầu nộp bài tập, Bo phải làm sao?"
            }, 
            {
                img: t4, 
                description: "Sam vẫn còn nhỏ và đang sống với ba mẹ. Một đêm nọ, Sam đang say giấc thì bỗng choàng tỉnh vì ngửi thấy mùi khói từ đâu đó. Nếu con là chú mèo con Sam, con sẽ làm gì nào?"
            }, 
            {
                img: t5, 
                description: "Hôm nay heo con Tồ được mẹ tặng một con khủng long đồ chơi rất đẹp. Heo con mang lên trường để khoe với bạn bè, nhưng thực không may Simon đã giành đồ chơi của heo con mất tiêu :<"
            }, 
            {
                img: t6, 
                description: "Heo con Tồ đang trên đường về nhà thì gặp một chú gấu xám. Gấu xám nói: \"Chú có kẹo, con đi theo chú nha\". Con nghĩ heo con Tồ nên làm gì?"
            }, 
            {
                img: t7, 
                description: "Chú chuột con Sún rất thích chiếc tên lửa đồ chơi mới của mèo nhỏ Sam nên đã mượn về nhà chơi ít hôm. Tuy nhiên Sún đã vô tình làm mất chiếc xe đồ chơi đó mất rồi. Nếu con là mèo Sam nhỏ, con sẽ làm gì?"
            }, 
            {
                img: t8, 
                description: "Hôm nay trên đường cu Bin đi đến trường, một người đàn ông lạ mặt xuất hiện rồi đột nhiên tiếp xúc cơ thể với cu Bin. Điều này làm Bin cảm thấy rất khó chịu. Nếu con là cu Bin, con sẽ làm gì?"
            }
        ]
    }
]

export const comboData = [
    {
        _id: "1",
        img: tieuChuan,
        title: "Bộ tiêu chuẩn",
        price: "300,000 VND",
        sale: "210,000 VND",
        description: "Một bộ kit bao gồm những vật dụng thú vị, được xây dựng dựa trên các kiến thức khoa học và sự hỗ trợ từ đội ngũ chuyên gia giáo dục trẻ em đầy kinh nghiệm với mục tiêu giúp cha mẹ giáo dục con và đưa con đến tương lai đẹp nhất.",
        tags: ["Nhiệm vụ hàng ngày", "Thẻ cảm xúc", "Trò chơi tình huống"]
    },
    {
        _id: "2",
        img: moRong,
        title: "Bộ cùng con",
        price: "450,000 VND",
        sale: "330,000 VND",
        description: "Một bộ kit bao gồm những vật dụng thú vị, được xây dựng dựa trên các kiến thức khoa học và sự hỗ trợ từ đội ngũ chuyên gia giáo dục trẻ em đầy kinh nghiệm với mục tiêu giúp cha mẹ giáo dục con và đưa con đến tương lai đẹp nhất.",
        tags: ["Nhiệm vụ hàng ngày", "Nhật ký", "Sổ hướng dẫn", "Sổ tình huống", "Thẻ cảm xúc", "Trò chơi tình huống"]
    },
]

export const toolkitData = [
    {
        _id: "1",
        img: nhiemVuHangNgay,
        title: "Nhiệm vụ hàng ngày",
        subTitle: "Bộ nhiệm vụ hàng ngày bao gồm 35 thẻ nhiệm vụ gợi ý các hoạt động đơn giản để cha mẹ và con có thể dễ dàng thực hiện mà không cần chuẩn bị trước hay mất quá nhiều thời gian trong ngày.",
        description: "Các hoạt động ghi trên thẻ được xây dựng dựa trên những kiến thức khoa học, với mục tiêu làm tăng tương tác giữa bạn và con, giúp con phát triển một cách lành mạnh.\n\nMặt sau được tích hợp các kiến thức khoa học để giúp việc nuôi dạy con của cha mẹ trở nên dễ dàng hơn.\n\nCác thẻ sẽ được chia ra theo nhóm: Phát triển nhận thức, phát triển cảm xúc, phát triển tư duy logic,... để ba mẹ có thể rút tùy chỉnh theo nhu cầu. Ngoài ra, cha mẹ còn có thể tham khảo lộ trình mà Cộng Hưởng khuyến nghị để có được trải nghiệm tốt nhất.",
        tags: ["CLARITY", "CONFIDENCE", "CONNECTION"]
    },
    {
        _id: "2",
        img: diary,
        title: "Nhật ký",
        description: "Cha mẹ sẽ dành thời gian viết những câu chuyện đồng hành cùng con (có thể đính kèm hình ảnh,...), đánh dấu sự phát triển của con về cả thể chất và tinh thần. Bênh trong quyển số sẽ bao gồm các mục gợi ý, hướng dẫn tích hợp các mục tiêu khoa học để hành trình của cha mẹ có thể được ghi chép một cách hiệu quả nhất.",
        tags: ["CLARITY", "CONFIDENCE", "CONNECTION"]
    },
    {
        _id: "3",
        img: poster,
        title: "Sổ hướng dẫn",
        description: "Các hướng dẫn tổng quan về những điều cần tránh, những điều nên làm và những kỹ năng trẻ nên được học dựa vào các giai đoạn phát triển của đứa trẻ",
        tags: ["CLARITY", "CONFIDENCE", "CONNECTION"]
    },
    {
        _id: "4",
        img: soTinhHuong,
        title: "Sổ tình huống",
        description: "Quyển sổ với những cách tiếp cận trực tiếp, đơn giản, giúp cha mẹ có thể có một phản ứng phù hợp và hiệu quả với những tình huống khó xử thưởng gặp.",
        tags: ["CLARITY", "CONFIDENCE", "CONNECTION"]
    },
    {
        _id: "5",
        img: theCamXuc,
        title: "Thẻ cảm xúc",
        subTitle: "Bộ thẻ cảm xúc là một trò chơi hỗ trợ cha mẹ thấu hiểu cảm xúc, tính cách của con. Đồng thời, đây còn là công cụ hỗ trợ phát triển trí thông minh cảm xúc của trẻ thông qua hoạt động hồi tưởng.",
        description: "Bộ thẻ bao gồm:\n- 10 tấm thẻ có các hình ảnh chụp lại cảm xúc của con người kèm câu hỏi \"Con có từng cảm thấy như thế này chưa?\"\n- 10 thẻ về sự vật/ một số địa điểm/ nơi thường diễn ra các kỷ niệm đáng nhớ.\n\nQuy tắc trò chơi như sau: Mỗi người lần lượt rút 1 tấm thẻ từ 2 tụ bài và hồi tưởng lại những kỉ niệm có chứa cảm xúc đó và gắn liền với sự vật đó. Nhiệm vụ của người còn lại là sử dụng tối đa 5 câu hỏi để hỏi về kỉ niệm đó và đoán được kỉ niệm ẩn chứa sau 2 tấm bài.",
        tags: ["CLARITY", "CONFIDENCE", "CONNECTION"]
    },
    {
        _id: "6",
        img: troChoiTinhHuong,
        title: "Trò chơi tình huống",
        subTitle: "Trò chơi tình huống là công cụ hỗ trợ cha mẹ giáo dục hành vi và nhận thức của con một cách thú vị thông qua hoạt động game.",
        description: "Trò chơi bao gồm:\n- Một bàn cờ có kích thước A3 (297mm x 420mm)\n- Ba quân cờ với ba màu khác nhau\n- 25 thẻ được in các tình huống mà con thường gặp\n\nQuy luật của trò chơi:\n- Mục tiêu cuối cùng của người chơi là đi đến điểm cuối cùng\n- Với mỗi bước đi, người chơi sẽ được bốc 1 tấm thẻ tình huống, mỗi tình huống sẽ có đáp án đúng ở mặt sau. Quân cờ tương ứng của người chơi sẽ được tiến về phía trước dựa vào số lần đoán để đi đến đáp án đúng: Với 1 lần đoán: Người chơi sẽ được tiến 6 bước.  Với 2 lần đoán: Người chơi sẽ được tiến 5 bước.  Với 3 lần đoán: Người chơi sẽ được tiến 4 bước.  Với 4 lần đoán: Người chơi sẽ được tiến 3 bước.  Với 5 lần đoán: Người chơi sẽ được tiến 2 bước\n- Người chơi sẽ chiến thắng khi đến được đích. Nếu có nhiều người chơi, người chơi đến đích đầu tiên sẽ chiến thắng.\n\nHướng dẫn dành cho cha mẹ:\n- Cha mẹ có thể chơi cùng con hoặc làm quản trò để con chơi cùng anh em hoặc các bạn.\n- Cha mẹ sẽ là người quyết định câu trả lời đúng.\n- Cha mẹ liên tục đưa ra các câu hỏi gợi mở để dẫn dắt con đến đáp án đúng. Ví dụ: Đối với thẻ: “Con sẽ làm gì nếu có người lạ đến cho con kẹo và dẫn con đi?”, cha mẹ có thể gợi mở khi con trả lời sai bằng các câu hỏi: “Nếu người đó là người xấu thì sao?”, “Liệu con có biết con sẽ đi đến đâu?”. Những câu hỏi gợi mở có thể được tìm thấy trong hướng dẫn gửi kèm của sản phẩm.\n- Cha mẹ có thể tự do sáng tạo các quy luật khác để làm trò chơi thú vị hơn.",
        tags: ["CLARITY", "CONFIDENCE", "CONNECTION"]
    }
];