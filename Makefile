N := google-chrome-refer-relation

dist:
	cp -r extension $(N)
	zip -x *swp -r $(N).zip $(N)
	rm -rf $(N)

clean:
	rm $(N).zip


