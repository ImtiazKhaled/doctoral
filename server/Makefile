doctoral.sql: doctoral_base.sql generated
	cat $^ > $@
generated: generate.py
	python3 $^
clean:
	rm generated doctoral.sql

