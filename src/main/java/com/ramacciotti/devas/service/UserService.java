package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.User;
import com.ramacciotti.devas.repository.UserRepository;
import com.ramacciotti.devas.vo.GetUserVO;
import com.ramacciotti.devas.vo.PostUserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public PostUserVO createUser(PostUserVO postUserVO) {

        Optional<User> userExists = userRepository.findByEmail(postUserVO.getEmail());

        if(userExists.isPresent()){

            throw new IllegalArgumentException("this_user_already_exists");

        } else {

            log.info("Saving new user {} to database", postUserVO.getEmail());

            User user = new User()
                    .withEmail(postUserVO.getEmail())
                    .withImage(postUserVO.getImage())
                    .withName(postUserVO.getName())
                    .withCity(postUserVO.getCity())
                    .withAge(postUserVO.getAge())
                    .withArea(postUserVO.getArea())
                    .withLevel(postUserVO.getLevel())
                    .withObjective(postUserVO.getObjective())
                    .withLanguages(postUserVO.getLanguages())
                    .withDescription(postUserVO.getDescription())
                    .withLinkedin(postUserVO.getLinkedin())
                    .withGithub(postUserVO.getGithub());

            user = userRepository.save(user);

            return new PostUserVO(user);
        }
    }

    @Transactional
    public PostUserVO updateUser(Long id, PostUserVO userVO) {

        Optional<User> user = userRepository.findById(id);

        if(userVO.getEmail() != null){
            throw new IllegalArgumentException("cannot_change_user_email");
        }

        if(userVO.getImage() != null){
            user.get().setImage(userVO.getImage());
        }

        if(userVO.getName() != null){
            user.get().setName(userVO.getName());
        }

        if(userVO.getCity() != null){
            user.get().setCity(userVO.getCity());
        }

        if(userVO.getObjective() != null){
            user.get().setObjective(userVO.getObjective());
        }

        if(userVO.getAge() != null){
            user.get().setAge(userVO.getAge());
        }

        if(userVO.getArea() != null){
            user.get().setArea(userVO.getArea());
        }

        if(userVO.getLevel() != null){
            user.get().setLevel(userVO.getLevel());
        }

        if(userVO.getLanguages() != null){
            user.get().setLanguages(userVO.getLanguages());
        }

        if(userVO.getDescription() != null){
            user.get().setDescription(userVO.getDescription());
        }

        if(userVO.getLinkedin() != null){
            user.get().setLinkedin(userVO.getLinkedin());
        }

        if(userVO.getGithub() != null){
            user.get().setGithub(userVO.getGithub());
        }

        return new PostUserVO(user.get());

    }

    public void deleteUser(Long id) {
        System.out.println("ID: " + id);
        userRepository.deleteById(id);
    }

    public List<GetUserVO> findUsers(){

        log.info("Getting all users");

        List<User> users = userRepository.findAll();

        return GetUserVO.convertToVO(users);

    }

    public GetUserVO findUserByEmail(String email) {
        var user = userRepository.findByEmail(email);
        if(user.isEmpty()){
            throw new IllegalArgumentException("user_not_found");
        }
        return new GetUserVO(user.get());
    }

}
