package Controller;

import Model.Marks;
import Repository.MarksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MarksController {
    @Autowired
    MarksRepository marksRepository;

    @GetMapping("/marks")
    @ResponseBody
    public List<Marks> getAllMarks(){
        System.out.println(marksRepository.findAll());
        return marksRepository.findAll();
    }
}
