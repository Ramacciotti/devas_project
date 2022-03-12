package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.Status;
import com.ramacciotti.devas.model.Technology;
import com.ramacciotti.devas.model.User;
import com.ramacciotti.devas.repository.UserRepository;
import com.ramacciotti.devas.vo.UserVO;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserCrudService implements UserCrudInterface {

    private final UserRepository repository;
    private final UserFilterService filter;
    private final UserValidationService validation;
    private final PasswordEncoder encoder;

    public UserCrudService(UserRepository repository, UserFilterService filter, UserValidationService validation, PasswordEncoder encoder) {
        this.repository = repository;
        this.filter = filter;
        this.validation = validation;
        this.encoder = encoder;
    }

    @Override
    public UserVO createUser(UserVO userVO) {

        var searchUser = repository.findByEmail(userVO.getEmail());

        if(searchUser.isPresent()){

            throw new IllegalArgumentException("this_email_is_already_registered");

        } else {

            User user = new User()
                    .withEmail(userVO.getEmail())
                    .withPassword(encoder.encode(userVO.getPassword()))
                    .withAbout(userVO.getAbout())
                    .withSocial(userVO.getSocial())
                    .withJob(userVO.getJob())
                    .withTechnology(userVO.getTechnology());

            Status status = new Status();
            status.setCreatedAt(LocalDateTime.now());
            user.setStatus(status);

            user = repository.save(user);

            return new UserVO(user);
        }

    }

    @Override
    public List<UserVO> readUsers() {
        List<User> user = repository.findAll();
        return UserVO.convertToVO(user);
    }

    @Override
    public UserVO updateUser(UserVO userVO) {

        Optional<User> user = filter.findUserByEmail(userVO.getEmail());

        updateAbout(user, userVO);

        updateSocial(user, userVO);

        updateTechnology(user, userVO);

        updateJob(user, userVO);

        repository.save(user.get());

        return new UserVO(user.get());

    }

    @Override
    public void deleteUser(String email, String password) {

        if(validation.validateLogin(email, password)){
            Optional<User> user = filter.findUserByEmail(email);
            repository.delete(user.get());
        } else {
            throw new IllegalArgumentException("wrong_credentials");
        }
    }



    public void updateAbout(Optional<User> user, UserVO userVO) {

        if(userVO.getAbout() != null){

            if (userVO.getAbout().getName() != null) {
                user.get().getAbout().setName(userVO.getAbout().getName());
            } else {
                user.get().getAbout().setName(user.get().getAbout().getName());
            }

            if (userVO.getAbout().getAge() != null) {
                user.get().getAbout().setAge(userVO.getAbout().getAge());
            } else {
                user.get().getAbout().setAge(user.get().getAbout().getAge());
            }

            if (userVO.getAbout().getCity() != null) {
                user.get().getAbout().setCity(userVO.getAbout().getCity());
            } else {
                user.get().getAbout().setCity(user.get().getAbout().getCity());
            }

            if (userVO.getAbout().getDescription() != null) {
                user.get().getAbout().setDescription(userVO.getAbout().getDescription());
            } else {
                user.get().getAbout().setDescription(user.get().getAbout().getDescription());
            }

            if (userVO.getAbout().getImage() != null) {
                user.get().getAbout().setImage(userVO.getAbout().getImage());
            } else {
                user.get().getAbout().setImage(user.get().getAbout().getImage());
            }

            user.get().getStatus().setUpdatedAt(LocalDateTime.now());

        }

    }

    public void updateSocial(Optional<User> user, UserVO userVO) {

        if(userVO.getSocial() != null){

            if (userVO.getSocial().getLinkedin() != null) {
                user.get().getSocial().setLinkedin(userVO.getSocial().getLinkedin());
            } else {
                user.get().getSocial().setLinkedin(user.get().getSocial().getLinkedin());
            }

            if (userVO.getSocial().getGithub() != null) {
                user.get().getSocial().setGithub(userVO.getSocial().getGithub());
            } else {
                user.get().getSocial().setGithub(user.get().getSocial().getGithub());
            }

            user.get().getStatus().setUpdatedAt(LocalDateTime.now());

        }

    }

    public void updateTechnology(Optional<User> user, UserVO userVO) {

        if(userVO.getTechnology() != null) {

            if (userVO.getTechnology().getName() != null) {
                user.get().getTechnology().setName(userVO.getTechnology().getName());
            } else {
                user.get().getTechnology().setName(user.get().getTechnology().getName());
            }
        }

    }

    public void updateJob(Optional<User> user, UserVO userVO) {

        if(userVO.getJob() != null) {

            if (userVO.getJob().getPosition() != null) {
                user.get().getJob().setPosition(userVO.getJob().getPosition());
            } else {
                user.get().getJob().setPosition(user.get().getJob().getPosition());
            }

            if (userVO.getJob().getLevel() != null) {
                user.get().getJob().setLevel(userVO.getJob().getLevel());
            } else {
                user.get().getJob().setLevel(user.get().getJob().getLevel());
            }

            if (userVO.getJob().getPreference() != null) {
                user.get().getJob().setPreference(userVO.getJob().getPreference());
            } else {
                user.get().getJob().setPreference(user.get().getJob().getPreference());
            }

            if (userVO.getJob().getObjective() != null) {
                user.get().getJob().setObjective(userVO.getJob().getObjective());
            } else {
                user.get().getJob().setObjective(user.get().getJob().getObjective());
            }

            if (userVO.getJob().getExpectation() != null) {
                user.get().getJob().setExpectation(userVO.getJob().getExpectation());
            } else {
                user.get().getJob().setExpectation(user.get().getJob().getExpectation());
            }

            user.get().getStatus().setUpdatedAt(LocalDateTime.now());
        }

    }

}
