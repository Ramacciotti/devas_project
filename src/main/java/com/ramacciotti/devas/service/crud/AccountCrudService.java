package com.ramacciotti.devas.service.crud;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.repository.AccountRepository;
import com.ramacciotti.devas.service.sections.profile.ProfileCrudService;
import com.ramacciotti.devas.service.sections.social.SocialCrudService;
import com.ramacciotti.devas.service.sections.status.StatusCrudService;
import com.ramacciotti.devas.service.validation.AccountValidationService;
import com.ramacciotti.devas.vo.AccountVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class AccountCrudService implements AccountCrudInterface {

    private final AccountRepository repository;
    private final ProfileCrudService profile;
    private final SocialCrudService social;
    private final StatusCrudService status;
    private final AccountValidationService validation;
    private final PasswordEncoder encoder;

    public AccountCrudService(AccountRepository repository, ProfileCrudService profile, SocialCrudService social, StatusCrudService status, AccountValidationService validation, PasswordEncoder encoder) {
        this.repository = repository;
        this.profile = profile;
        this.social = social;
        this.status = status;
        this.validation = validation;
        this.encoder = encoder;
    }

    @Override
    public AccountVO createAccount(AccountVO AccountVO) {

        Account account = new Account()
                .withEmail(AccountVO.getEmail())
                .withCreatedAt(LocalDateTime.now())
                .withPassword(encoder.encode(AccountVO.getPassword()))
                .withProfile(AccountVO.getProfile())
                .withStatus(AccountVO.getStatus())
                .withSocial(AccountVO.getSocial())
                .withTechnologies(AccountVO.getTechnologies());

        account = repository.save(account);

        return new AccountVO(account);

    }

    @Override
    public List<AccountVO> readAccounts() {
        List<Account> account = repository.findAll();
        return AccountVO.convertToVO(account);
    }

    @Override
    public AccountVO updateAccount(Long id, AccountVO accountVO) {

        Optional<Account> account = validation.checkIfAccountExists(id);

        profile.updateProfile(account, accountVO);
        status.updateStatus(account, accountVO);
        social.updateSocial(account,accountVO);

        repository.save(account.get());

        return new AccountVO(account.get());

    }

    @Override
    public void deleteAccount(Long id) {
        Optional<Account> account = validation.checkIfAccountExists(id);
        repository.delete(account.get());
    }


}
