package es.lab.jhipster7;

import es.lab.jhipster7.Jhipster7App;
import es.lab.jhipster7.ReactiveSqlTestContainerExtension;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = Jhipster7App.class)
@ExtendWith(ReactiveSqlTestContainerExtension.class)
public @interface IntegrationTest {
}
